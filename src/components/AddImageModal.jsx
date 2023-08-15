/* eslint-disable react/no-children-prop */
import Button from '@/components/Button';
import ImageIcon from '@/assets/img/6.png';
import '@/assets/style/ImageGrid.css';

export default function ImageModal({
  selectedFilePath,
  selectedFile,
  closeWindowHandler,
  onChangeHandler,
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
                  onChangeHandler(event);
                }}
                style={{ backgroundColor: 'transparent' }}
              />
            </label>
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
          <Button
            children="X"
            style={modalButton}
            onClick={closeWindowHandler}
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
