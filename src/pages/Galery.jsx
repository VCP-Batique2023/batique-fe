import { useState, useEffect } from 'react';
import ImageHeader from '@/components/ImageHeader';
import ImageGrid from '@/components/ImageGrid';
import GaleryHeader from '@/assets/img/1.jpg';

// Image Dummy Data
const feedsList = [
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/30.jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/31.jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/31.jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/33.jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/34.jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/35.jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/36.jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/37.jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/38.jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/39.jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/40.jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(1).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(2).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(3).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(4).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(5).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(6).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(7).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(8).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(9).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(10).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(11).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(12).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(13).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(14).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(15).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(16).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(17).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(18).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(19).jpg',
    like: 100,
  },
  {
    profilePicture:
      'https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png',
    username: 'Calvin Danyalson',
    title: 'Lorem',
    url: 'https://storage.googleapis.com/batique-images/a%20(20).jpg',
    like: 100,
  },
];

export default function Galery() {
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth >= 992 ? '60vh' : '30vh'
  );

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

  return (
    <>
      <ImageHeader path={GaleryHeader} height={screenWidth} />
      <ImageGrid feeds={feedsList} />
    </>
  );
}
