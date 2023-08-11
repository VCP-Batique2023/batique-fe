/* eslint-disable react/no-children-prop */
import { useState, useEffect } from 'react';
import ImageHeader from '@/components/ImageHeader';
import ImageGrid from '@/components/ImageGrid';
import ImageModal from '@/components/ImageModal';
import Button from '@/components/Button';

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
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth >= 992 ? '60vh' : '30vh'
  );
  const [feedsList, setFeedsList] = useState(feedsDummyList);
  const [activeSort, setActiveSort] = useState('default');
  const [showModal, setShowModal] = useState(-1);
  const [postData, setPostData] = useState({});

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
  const triggerShowModal = (feed = {}) => {
    if (showModal == -1) {
      setShowModal(2);
      setPostData(feed);
    } else {
      setShowModal(-1);
      setPostData({});
    }
  };
  // For Triggering modal image <-- End

  return (
    <>
      <ImageHeader path={GaleryHeader} height={screenWidth} />
      <div className="sortContainer">
        <div className="sort" style={{ backgroundColor: '#372B22' }}>
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
      <ImageGrid feeds={feedsList} onClick={triggerShowModal} />
      <ImageModal onClick={triggerShowModal} show={showModal} data={postData} />
    </>
  );
}
