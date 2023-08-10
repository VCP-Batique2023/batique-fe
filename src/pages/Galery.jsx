import { useState, useEffect } from 'react';
import ImageHeader from '@/components/ImageHeader';
import ImageGrid from '@/components/ImageGrid';
import ImageModal from '@/components/ImageModal';

import GaleryHeader from '@/assets/img/1.jpg';

// Dummy Date Generator
function generateDate(x) {
  const date = new Date();
  date.setDate(date.getDate() - x);

  const tempDate = date.getDate();
  const tempMonth = date.getMonth() + 1;
  const tempYear = date.getFullYear();

  return [tempDate, tempMonth, tempYear].join('/');
}

// Image Dummy Data
const feedsList = [
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/30.jpg',
    like: 120,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/31.jpg',
    like: 100,
    createdAt: generateDate(2),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/31.jpg',
    like: 100,
    createdAt: generateDate(3),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/33.jpg',
    like: 90,
    createdAt: generateDate(12),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/34.jpg',
    like: 10,
    createdAt: generateDate(19),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/35.jpg',
    like: 10,
    createdAt: generateDate(7),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/36.jpg',
    like: 10,
    createdAt: generateDate(2),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/37.jpg',
    like: 12,
    createdAt: generateDate(3),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/38.jpg',
    like: 11,
    createdAt: generateDate(4),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/39.jpg',
    like: 53,
    createdAt: generateDate(5),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/40.jpg',
    like: 31,
    createdAt: generateDate(2),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(1).jpg',
    like: 75,
    createdAt: generateDate(6),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(2).jpg',
    like: 54,
    createdAt: generateDate(2),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(3).jpg',
    like: 65,
    createdAt: generateDate(5),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(4).jpg',
    like: 34,
    createdAt: generateDate(8),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(5).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(6).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(7).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(8).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(9).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(10).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(11).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(12).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(13).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(14).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(15).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(16).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(17).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(18).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(19).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
  {
    caption:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    url: 'https://storage.googleapis.com/batique-images/a%20(20).jpg',
    like: 100,
    createdAt: generateDate(1),
  },
];

export default function Galery() {
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth >= 992 ? '60vh' : '30vh'
  );
  const [showModal, setShowModal] = useState(-1);
  const [postData, setPostData] = useState({});

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
      <ImageGrid feeds={feedsList} onClick={triggerShowModal} />
      <ImageModal onClick={triggerShowModal} show={showModal} data={postData} />
    </>
  );
}
