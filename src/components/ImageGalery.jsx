import ImageOverlay from '@/components/ImageOverlay';
import '@/assets/style/ImageGrid.css';

export default function ImageGalery({ feedInformation }) {
  return (
    <div style={{ position: 'relative' }}>
      <div className="imageContainer">
        <img src={feedInformation.url} className="image" />
      </div>
      <ImageOverlay feedInformation={feedInformation} />
    </div>
  );
}
