/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react';
import Masonry from 'react-masonry-css';
import ImageGalery from '@/components/ImageGalery.jsx';
import Button from '@/components/Button.jsx';
import '@/assets/style/ImageGrid.css';

export default function ImageGrid({ feeds, onClick }) {
  let imagePerSlide = 15;
  const [count, setCount] = useState(
    feeds.length < 15 ? feeds.length : imagePerSlide
  );

  const loadMoreImageHandler = () => {
    if (feeds.length - count < imagePerSlide) {
      setCount(count + feeds.length - count);
    } else if (feeds.length - count > imagePerSlide) {
      setCount(count + imagePerSlide);
    }
  };

  const breakpointColumnsObj = {
    default: 4,
    1000: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        columnClassName="gridWrapperMasonryColumn"
        className="gridWrapperMasonry"
      >
        {feeds.slice(0, count).map((feed, index) => (
          <ImageGalery feedInformation={feed} onClick={onClick} key={index} />
        ))}
      </Masonry>
      {count != feeds.length ? (
        <div style={ButtonStyle}>
          <Button
            children="Load More"
            variant="outlined"
            size="large"
            onClick={loadMoreImageHandler}
            style={{ marginBottom: '20px' }}
          />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

const ButtonStyle = {
  marginTop: '5vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
