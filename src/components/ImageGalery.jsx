import "@/assets/style/ImageGrid.css";

export default function ImageGalery({ url }) {
  return (
    <div className="imageContainer">
      {/* <h1 style={{ position: 'absolute', top: 0, left: 0 }}>{id}</h1> */}
      <img src={url} className="image" />
    </div>
  );
}