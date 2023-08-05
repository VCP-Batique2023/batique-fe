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
          images.slice(0, count).map(image => (
            <ImageGalery url={image} key={generateKey()} />
          ))
        }
      </div>
      <Button children="Load More" onClick={loadMoreImageHandler} />
    </>
  );
}

let key = 0;
const generateKey = () => {
  key++;
  return key;
}