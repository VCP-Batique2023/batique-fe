/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react';

import { likeHander, checkIsLiked } from '@/modules/FeedsModules';
import { useAuth } from '@/contexts/AuthContext';

import Button from '@/components/Button';
import '@/assets/style/ImageGrid.css';

export default function ImageModal({
  userDetail,
  detailPost,
  handleClose,
  isOpen,
}) {
  const { currentUser } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    if (isOpen) {
      checkIsLiked(currentUser.uid, detailPost.likedByAccount, setIsLiked);
    }
    // console.log('This is modall : ' + isLiked);
  }, [isOpen]);

  function triggerLikeHandler() {
    likeHander(currentUser.uid, detailPost.feedId, isLiked, setIsLiked);
  }

  return (
    <>
      <div className="detailPostContainer" style={{ zIndex: 1, opacity: 1 }}>
        <div className="detailPost">
          <div className="leftContent">
            <img src={detailPost.imageUrl} />
            <svg
              className="likeButton"
              xmlns="http://www.w3.org/2000/svg"
              fill={isLiked ? 'red' : 'white'}
              onClick={triggerLikeHandler}
              viewBox="0 0 24 24"
              strokeWidth={0.1}
              stroke="currentColor"
              width={50}
              height={50}
              style={{ transition: '0.1s ease-in' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="rightContent">
            <div className="profileInformation">
              <img
                className="profilePicture"
                style={{
                  backgroundColor: 'transparent',
                  width: '60px',
                  height: '60px',
                  overflow: 'hidden',
                  borderRadius: '50%',
                }}
                src={
                  userDetail.profilePicture
                    ? userDetail.profilePicture
                    : 'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png'
                }
              />
              <h3>{userDetail.displayName}</h3>
            </div>
            <div className="postCaption">
              <p>{detailPost.caption}</p>
            </div>
          </div>
          <Button children="X" style={modalButton} onClick={handleClose} />
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
