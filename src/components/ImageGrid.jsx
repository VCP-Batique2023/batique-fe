import { useState } from 'react';
import ImageGalery from '@/components/ImageGalery.jsx';
import Button from '@/components/Button.jsx';
import '@/assets/style/ImageGridStyle.css';

export default function ImageGrid({ images }) {
  let imagePerSlide = 10
  const [count, setCount] = useState(imagePerSlide);
  // console.log(count);
  const loadMoreImageHandler = () => {
    setCount(count + imagePerSlide);
    console.log(count);
  }

  return (
    <>
      <div className='gridWrapper'>
        {
          images.slice(0, count).map((image, index) => (
            <ImageGalery url={image} key={index} />
          ))
        }
      </div>
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
}