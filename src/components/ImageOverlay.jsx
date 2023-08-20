import '@/assets/style/ImageGrid.css';
import { useEffect, useState } from 'react';
import { checkIsLiked } from '@/modules/FeedsModules';
import { useAuth } from '@/contexts/AuthContext';

// import { useEffect } from 'react';

/* 
    REQUIREMENT
    Before use this component, make sure the parent element
    should have a relative position (CSS Properties)
*/
function generateDate(x) {
  const date = new Date(x.toDate());
  const tempDate = date.getDate();
  const tempMonth = date.getMonth() + 1;
  const tempYear = date.getFullYear();

  return [tempDate, tempMonth, tempYear].join('/');
}

export default function ImageOverlay({ feedInformation }) {
  const { currentUser } = useAuth();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    checkIsLiked(currentUser.uid, feedInformation.likedByAccount, setIsLiked);
  }, [feedInformation]);
  return (
    <div className="overlay">
      {/* <h1>{isLiked}</h1> */}
      <div className="postTitle">{feedInformation.caption}</div>
      <div className="postFooter">
        <div className="date">{generateDate(feedInformation.createdAt)}</div>
        <div className="likeCounter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isLiked ? 'red' : 'white'}
            viewBox="0 0 24 24"
            strokeWidth={0.1}
            stroke="currentColor"
            width={28}
            height={28}
            style={{ transition: '0.1s ease-in' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <p>{feedInformation.like}</p>
        </div>
      </div>
    </div>
  );
}
