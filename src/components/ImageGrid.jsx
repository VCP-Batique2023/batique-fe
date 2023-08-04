import ImageGalery from '@/components/ImageGalery.jsx';
import '@/assets/style/ImageGridStyle.css';

export default function ImageGrid({ images }) {
  return (
    <>
      <div style={styles}>
        {
          images.map( image => (
            <ImageGalery url={image} size={randomSize()} key={generateKey()} />
          ))   
        }
      </div>
    </>
  );
}
const styles = {
  pin_container: {
  margin: 0,
  padding: 0,
  width: "80vw",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 250px)",
  gridAutoRows: "10px",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  justifyContent: "center",
  backgroundColor: "black"
  }
 }

const randomSize = () => {
  let size = ['small', 'medium', 'tall']
  return size[Math.floor(Math.random() * 3)];
}

let key = 0;
const generateKey = () => {
  key++;
  return key;
}