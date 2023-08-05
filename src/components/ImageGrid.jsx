import ImageGalery from '@/components/ImageGalery.jsx';
import '@/assets/style/ImageGridStyle.css';

export default function ImageGrid({ images }) {
  return (
    <>
      <div className='gridWrapper'>
        {
          images.map( image => (
            <ImageGalery url={image} key={generateKey()} />
          ))   
        }
      </div>
    </>
  );
}

let key = 0;
const generateKey = () => {
  key++;
  return key;
}