/* eslint-disable react/no-children-prop */
import Button from '@/components/Button';
import '@/assets/style/ImageGrid.css';

export default function ImageModal({ userDetail, detailPost, onClick, show }) {
  return (
    <>
      <div
        className="detailPostContainer"
        style={{ zIndex: show, opacity: show }}
      >
        <div className="detailPost">
          <div className="leftContent">
            <img src={detailPost.imageUrl} />
          </div>
          <div className="rightContent">
            <div className="profileInformation">
              <img
                className="profilePicture"
                style={{ backgroundColor: 'transparent', width: '60px' }}
                src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
              />
              <h3>{userDetail.email}</h3>
            </div>
            <div className="postCaption">
              <p>{detailPost.caption}</p>
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
