/* eslint-disable react/no-children-prop */
import Button from '@/components/Button';
import ImageIcon from '@/assets/img/6.png';
import '@/assets/style/ImageGrid.css';

export default function AddImageModal({
  selectedFilePath,
  closeWindowHandler,
  clientUpload,
  setCaptionInput,
  captionInput,
  firebaseUpload,
  currentUser,
  show,
}) {
  return (
    <>
      <div
        className="detailPostContainer"
        style={{ zIndex: show, opacity: show }}
      >
        <div className="detailPost addPost">
          <div className="leftContent">
            <label
              htmlFor="fileUpload"
              className="fileUpload"
              style={{
                backgroundColor: 'transparent',
                width: '100%',
              }}
            >
              {selectedFilePath ? (
                <img
                  src={selectedFilePath}
                  alt=""
                  style={{ backgroundColor: 'transparent', width: '100%' }}
                />
              ) : (
                <img
                  src={ImageIcon}
                  alt=""
                  style={{ width: '30%', backgroundColor: 'transparent' }}
                />
              )}
              <input
                id="fileUpload"
                type="file"
                hidden
                onChange={(event) => {
                  clientUpload(event);
                }}
                style={{ backgroundColor: 'transparent' }}
              />
            </label>
          </div>
          <div className="rightContent">
            <div className="profileInformation">
              <img
                className="profilePicture"
                style={{
                  objectFit: 'cover',
                  backgroundColor: 'transparent',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                }}
                src={
                  currentUser.profilePicture
                    ? currentUser.profilePicture
                    : 'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png'
                }
              />
              <h3>{currentUser.displayName}</h3>
            </div>
            <div className="postCaption">
              <input
                className="captionInput"
                type="text"
                placeholder="Write your caption here!"
                value={captionInput}
                onChange={(event) => {
                  setCaptionInput(event);
                }}
                accept="image/png, image/jpeg, image/jpg"
              />
            </div>
          </div>
          <Button
            children="X"
            style={modalButton}
            onClick={closeWindowHandler}
          />
          <Button
            children="Upload"
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
            }}
            onClick={firebaseUpload}
          />
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
