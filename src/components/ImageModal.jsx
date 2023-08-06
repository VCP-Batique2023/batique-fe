/* eslint-disable react/no-children-prop */
import Button from '@/components/Button';
import '@/assets/style/ImageGrid.css';

export default function ImageModal({ onClick, show }) {
  return (
    <>
      <div
        className="detailPostContainer"
        style={{ zIndex: show, opacity: show }}
      >
        <div className="detailPost">
          <div className="leftContent">
            <img src="https://storage.googleapis.com/batique-images/31.jpg" />
          </div>
          <div className="rightContent">
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
                <p>Write Your Caption Here</p>
              </div>
            </div>
          </div>
          <Button children="X" style={modalButton} onClick={onClick} />
        </div>
      </div>
    </>
  );
}

let modalButton = {
  position: 'absolute',
  right: '20px',
  top: '20px',
};
