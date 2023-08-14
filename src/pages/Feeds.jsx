/* eslint-disable react/no-children-prop */
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ImageHeader from '@/components/ImageHeader';
import ImageGrid from '@/components/ImageGrid';
import ImageModal from '@/components/ImageModal';
import AddImageModal from '@/components/AddImageModal';
import Button from '@/components/Button';

import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/modules/firebase_config';

import GaleryHeader from '@/assets/img/1.jpg';

// Image Dummy Data
const feedsDummyList = [
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/30.jpg',
    like: 10,
    createdAt: new Date('11-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/31.jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/31.jpg',
    like: 100,
    createdAt: new Date('02-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/33.jpg',
    like: 90,
    createdAt: new Date('11-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/34.jpg',
    like: 10,
    createdAt: new Date('01-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/35.jpg',
    like: 10,
    createdAt: new Date('10-07-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/38.jpg',
    like: 53,
    createdAt: new Date('12-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/39.jpg',
    like: 53,
    createdAt: new Date('12-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/40.jpg',
    like: 31,
    createdAt: new Date('11-07-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(2).jpg',
    like: 10,
    createdAt: new Date('01-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(2).jpg',
    like: 10,
    createdAt: new Date('01-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(2).jpg',
    like: 10,
    createdAt: new Date('01-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(3).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(4).jpg',
    like: 34,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(5).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(6).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(7).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(8).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(9).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(10).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(11).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(12).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(13).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(14).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(15).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(16).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(17).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(18).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(19).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(20).jpg',
    like: 100,
    createdAt: new Date('10-08-2023'),
  },
];

export default function Galery() {
  // Fetch data from firebase

  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth >= 992 ? '60vh' : '30vh'
  );
  const [feedsList, setFeedsList] = useState([]);

  const [activeSort, setActiveSort] = useState('default');
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
        className="w-6 h-6"
        style={{ backgroundColor: 'transparent' }}
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
          width: '5vh',
          height: '5vh',
          position: 'fixed',
          right: '10vh',
          bottom: '10vh',
          zIndex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
