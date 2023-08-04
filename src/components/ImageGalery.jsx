import "@/assets/style/ImageGridStyle.css";

export default function ImageGrid({ url, size }) {  
  return (
    <>
      <div style={imageSize[size]} className="imageContainer">
        <img src={url} className="image" />
      </div>
    </>
  );
}

const imageSize = {
  small: {
    gridRowEnd: "span 22",
    backgroundColor: "blue"
  },
  medium: {
    gridRowEnd: "span 33",
  },
  tall: {
    gridRowEnd: "span 45",
  },
}