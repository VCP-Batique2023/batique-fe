/* eslint-disable react/no-children-prop */
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ImageHeader from '@/components/ImageHeader';
import ImageGrid from '@/components/ImageGrid';
import ImageModal from '@/components/ImageModal';
import AddImageModal from '@/components/AddImageModal';
import Button from '@/components/Button';

import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/modules/firebase_config';

import GaleryHeader from '@/assets/img/1.jpg';

export default function Galery() {
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth >= 992 ? '60vh' : '30vh'
  );
  const [feedsList, setFeedsList] = useState([]);

  const [activeSort, setActiveSort] = useState('default');
  const { ref: targetButtonRef, inView: targetButtonIsVisible } = useInView();
  const [showModalDetailPost, setShowModalDetailPost] = useState(-1);
  const [showModalAddPost, setShowModalAddPost] = useState(-1);
  const [postData, setPostData] = useState({});

  // Listen on Feeds Collection Update
  function listenFeedsCollection(cb) {
    const data = [];
    const dataRef = collection(db, 'feeds');
    const dataSnapshot = onSnapshot(dataRef, (snapshot) => {
      snapshot.forEach((doc) => {
        data.push(doc.data());
      });
      cb(data);
    });
    return dataSnapshot;
  }

  // Fetch data from firebase
  useEffect(() => {
    const unsubscribe = listenFeedsCollection(setFeedsList);
    return unsubscribe;
  }, []);

  // Filter Feeds
  function sortFeedsByMostLikes() {
    const copy = [...feedsList].sort((a, b) => b.like - a.like);
    setFeedsList(copy);
    setActiveSort('likes');
  }

  function sortFeedsByMostRecent() {
    const copy = [...feedsList].sort((a, b) => b.createdAt - a.createdAt);
    setFeedsList(copy);
    setActiveSort('recent');
  }

  // For Image Header component (responsive) --> Start
  const resizeScreenHandler = () => {
    if (window.innerWidth >= 992) {
      setScreenWidth('60vh');
    } else {
      setScreenWidth('40vh');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeScreenHandler);

    return () => {
      window.removeEventListener('resize', resizeScreenHandler);
    };
  }, []);
  // For Image Header component (responsive) <-- end

  // For Triggering modal image --> Start
  const triggerShowModalDetailPost = (feed = {}) => {
    if (showModalDetailPost == -1) {
      setShowModalDetailPost(2);
      setPostData(feed);
    } else {
      setShowModalDetailPost(-1);
      setPostData({});
    }
  };
  // For Triggering modal image <-- End

  // For Triggering modal add image --> Start
  const triggerShowModalAddPost = () => {
    if (showModalAddPost == -1) {
      setShowModalAddPost(2);
    } else {
      setShowModalAddPost(-1);
    }
  };
  // For Triggering modal add image <-- End

  const plusIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 25 25"
        strokeWidth={1.5}
        stroke="currentColor"
        width={24}
        height={24}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    );
  };

  return (
    <>
      <ImageHeader path={GaleryHeader} height={screenWidth} />
      <div className="sortContainer">
        <div
          ref={targetButtonRef}
          className="sort"
          style={{ backgroundColor: '#372B22' }}
        >
          <Button
            children="Most Likes"
            style={activeSort == 'likes' ? { backgroundColor: '#504237' } : ''}
            onClick={sortFeedsByMostLikes}
          />
          <Button
            children="Most Resent"
            style={activeSort == 'recent' ? { backgroundColor: '#504237' } : ''}
            onClick={sortFeedsByMostRecent}
          />
        </div>
      </div>
      <ImageGrid feeds={feedsList} onClick={triggerShowModalDetailPost} />
      <ImageModal
        onClick={triggerShowModalDetailPost}
        show={showModalDetailPost}
        data={postData}
      />
      <Button
        children={plusIcon()}
        style={{
          borderRadius: '50%',
          width: '7vh',
          height: '7vh',
          position: 'fixed',
          right: '10vh',
          bottom: '10vh',
          zIndex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}
        onClick={triggerShowModalAddPost}
      />
      <AddImageModal
        show={showModalAddPost}
        onClick={triggerShowModalAddPost}
      />
    </>
  );
}
