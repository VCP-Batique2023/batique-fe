import '@/assets/style/ImageGrid.css';

export default function ImageGalery({ url }) {
  return (
    <div style={{ position: 'relative' }}>
      <div className="imageContainer">
        <img src={url} className="image" />
      </div>
      <div className="overlay">
        <div className="postInformation">
          {/* Profile Picture */}
          <img
            className="profilePicture"
            style={{ backgroundColor: 'transparent', width: '60px' }}
            src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
          />

          {/* Profile Information */}
          <div className="profileInformation">
            <h3>Calvin Danyalson</h3>
            <p>Musonary Lorem Ipsum</p>
          </div>

          {/* Like Counter */}
          <div className="likeCounter">
            <img
              src="https://citizenshospitals.com/wp-content/uploads/2016/12/Heart_Icon_White.png"
              style={{ backgroundColor: 'transparent', width: '30px' }}
            />
            <p>100</p>
          </div>
        </div>
      </div>
    </div>
  );
}
