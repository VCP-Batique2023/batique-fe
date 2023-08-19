/* eslint-disable react/no-children-prop */
import { useState } from 'react';
import toast from 'react-hot-toast';

import { likeHander } from '@/modules/FeedsModules';

import Button from '@/components/Button';
import '@/assets/style/ImageGrid.css';

export default function ImageModal({ userDetail, detailPost, onClick, show }) {
  const [like, setLike] = useState('red');
  // console.log(userDetail);
  function triggerLikeHandler() {
    if (like == 'white') {
      setLike('red');
      likeHander(userDetail.uid, detailPost.feedId, setLike);
    } else {
      setLike('white');
      likeHander(userDetail.uid, detailPost.feedId, setLike);
    }
  }

  return (
    <>
      <div
        className="detailPostContainer"
        style={{ zIndex: show, opacity: show }}
      >
        <div className="detailPost">
          <div className="leftContent">
            <img src={detailPost.imageUrl} />
            <svg
              className="likeButton"
              xmlns="http://www.w3.org/2000/svg"
              fill={like}
              onClick={triggerLikeHandler}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
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
                style={{ backgroundColor: 'transparent', width: '60px' }}
                src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
              />
              <h3>{userDetail.displayName}</h3>
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
