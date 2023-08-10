import '@/assets/style/ImageGrid.css';

/* 
    REQUIREMENT
    Before use this component, make sure the parent element
    should have a relative position (CSS Properties)
*/

export default function ImageOverlay({ feedInformation }) {
  return (
    <div className="overlay">
      <div className="postTitle">{feedInformation.caption}</div>
      <div className="postFooter">
        <div className="date">{feedInformation.createdAt}</div>
        <div className="likeCounter">
          <img
            src="https://citizenshospitals.com/wp-content/uploads/2016/12/Heart_Icon_White.png"
            style={{ backgroundColor: 'transparent', maxWidth: '30px' }}
          />
          <p>{feedInformation.like}</p>
        </div>
      </div>
    </div>
  );
}
