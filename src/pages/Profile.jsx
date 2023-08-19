import { useState, useEffect } from 'react';
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import Modal from "./Modal";
import EmptyAvatar from "../assets/img/empty-avatar.png";
import "../assets/style/Display.css";
import ImageGrid from '@/components/ImageGrid';
import ImageModal from '@/components/ImageModal';

function Display() {
  const [isOpen, setIsOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  function changeModal() {
    setIsOpen(!isOpen);
  }

  function handleSubmit({ name, avatar, username, bio }) {
    setName(name);
    setAvatar(avatar);
    setUsername(username);
    setBio(bio);
  }

  function replaceWithBr() {
    return bio.replace(/\r\n|\r|\n/g, "<br />");
  }

  return (
    <div className="main-profile">
      <div id="display" className="display">
        <div className="display__avatar">
          <img src={avatar ? avatar : EmptyAvatar} alt="avatar" />
        </div>
        <div className="display__info">
          <div className="display__info__header">
            <h2 className="display__name">{name || "John Doe"}</h2>
            <button className="btn btn-ghost">
              <EllipsisHorizontalIcon
                className="icon edit__icon"
                onClick={changeModal}
              />
            </button>
          </div>
          <div className="display__info__body">
            <p className="display__username">
              {username ? `@${username}` : "@johndoe"}
            </p>
            <p
              className="display__bio"
              dangerouslySetInnerHTML={{ __html: replaceWithBr() }}
            ></p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        changeModal={changeModal}
        avatar={avatar ? avatar : EmptyAvatar}
        name={name}
        username={username}
        bio={bio}
        handleSubmit={handleSubmit}
      />
      
    </div>
  );
}

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
  const [setScreenWidth] = useState(
    window.innerWidth >= 992 ? '60vh' : '30vh'
  );
  const [showModal, setShowModal] = useState(-1);
  const [postData, setPostData] = useState({});

  const resizeScreenHandler = () => {
    if (window.innerWidth >= 992) {
      setScreenWidth('60vh');
    } else {
      setScreenWidth('40vh');
    }
  };

  const triggerShowModal = (feed = {}) => {
    if (showModal === -1) {
      setShowModal(2);
      setPostData(feed);
    } else {
      setShowModal(-1);
      setPostData({});
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeScreenHandler);

    return () => {
      window.removeEventListener('resize', resizeScreenHandler);
    };
  }, []);

  return (
    <>
      <Display />
      <h2 className='judulbatik'>Galeri Batique</h2>
      <ImageGrid feeds={feedsList} onClick={triggerShowModal} />
      <ImageModal onClick={triggerShowModal} show={showModal} data={postData} />
    </>
  );
}