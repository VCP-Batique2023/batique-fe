import "@/assets/style/ImageGridStyle.css";

export default function ImageGrid({ url }) {  
  return (
    <>
      <div className="imageContainer">
        <img src={url} className="image" />
      </div>
    </>
  );
}