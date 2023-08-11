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
            <svg
              style={{ backgroundColor: 'transparent' }}
              xmlns="http://www.w3.org/2000/svg"
              fill="solid"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <div className="rightContent">
            <div className="profileInformation">
              <img
                className="profilePicture"
                style={{ backgroundColor: 'transparent', width: '60px' }}
                src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
              />
              <h3>Calvin Danyalson</h3>
            </div>
            <div className="postCaption">
              <p>Insert your caption here</p>
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
