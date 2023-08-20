import ImageOverlay from '@/components/ImageOverlay';
import '@/assets/style/ImageGrid.css';

export default function ImageGalery({ feedInformation, onClick, index }) {
  const sendDataToModal = () => {
    onClick(feedInformation);
  };
  return (
    <div onClick={sendDataToModal} style={{ position: 'relative' }}>
      <h1>{index}</h1>
      <div className="imageContainer">
        <img src={feedInformation.imageUrl} className="image" />
      </div>
      <ImageOverlay feedInformation={feedInformation} />
    </div>
  );
}
