import '@/assets/style/ImageGrid.css';

/* 
    REQUIREMENT
    Before use this component, make sure the parent element
    should have a relative position (CSS Properties)
*/

export default function ImageOverlay({ feedInformation }) {
  return (
    <div className="overlay">
      <div className="overlayContentContainer">
        <div className="postInformation">
          {/* Profile Picture */}
          <img
            className="profilePicture"
            style={{ backgroundColor: 'transparent', width: '60px' }}
            src={feedInformation.profilePicture}
          />

          {/* Profile Information */}
          <div className="profileInformation">
            <h3>{feedInformation.username}</h3>
            <p>{feedInformation.title}</p>
          </div>
        </div>
        {/* Like Counter */}
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
