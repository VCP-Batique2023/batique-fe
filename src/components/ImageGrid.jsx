/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from 'react';
import Masonry from 'react-masonry-css';
import ImageGalery from '@/components/ImageGalery.jsx';
import Button from '@/components/Button.jsx';
import '@/assets/style/ImageGrid.css';

export default function ImageGrid({ images }) {
  let imagePerSlide = 15;
  const [count, setCount] = useState(imagePerSlide);
  const loadMoreImageHandler = () => {
    setCount(count + imagePerSlide);
    console.log(count);
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
        {images.slice(0, count).map((image, index) => (
          <ImageGalery url={image} key={index} />
        ))}
      </Masonry>
      <div style={ButtonStyle}>
        <Button children="Load More" onClick={loadMoreImageHandler} />
      </div>
    </>
  );
}

const ButtonStyle = {
  marginTop: '5vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
