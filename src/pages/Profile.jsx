/* eslint-disable react/no-children-prop */
// Import package
import { useState, useEffect } from 'react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

// Import custom package
import {
  getUserById,
  getFeedsById,
  handleClientUpload,
  handleFirebaseUpload,
  getCurrentUserDataByUid,
  handleFirebaseUpdateProfile,
} from '@/modules/ProfileModules';
import { useAuth } from '@/contexts/AuthContext';

// Import JSX Component
import Modal from './Modal';
import EmptyAvatar from '../assets/img/empty-avatar.png';
import '../assets/style/Display.css';
import ImageGrid from '@/components/ImageGrid';
import ImageModal from '@/components/ImageModal';
import AddImageModal from '@/components/AddImageModal';
import Button from '@/components/Button';

// Import Image Component
function Display() {
  const { currentUser } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    getCurrentUserDataByUid(
      currentUser.uid,
      setAvatar,
      setName,
      setUsername,
      setBio
    );
  }, []);

  function changeModal() {
    setIsOpen(!isOpen);
  }

  function triggerFirebaseUpdateProfile({ name, newAvatar, username, bio }) {
    handleFirebaseUpdateProfile(
      currentUser.uid,
      avatar,
      newAvatar,
      name,
      username,
      bio,
      setAvatar,
      setName,
      setUsername,
      setBio
    );
  }

  function replaceWithBr() {
    return bio.replace(/\r\n|\r|\n/g, '<br />');
  }

  return (
    <div className="main-profile">
      <div id="display" className="display">
        <div className="display__avatar">
          <img src={avatar ? avatar : EmptyAvatar} alt="avatar" />
        </div>
        <div className="display__info">
          <div className="display__info__header">
            <h2 className="display__name">{name || 'John Doe'}</h2>
            <button className="btn btn-ghost">
              <EllipsisHorizontalIcon
                className="icon edit__icon"
                onClick={changeModal}
              />
            </button>
          </div>
          <div className="display__info__body">
            <p className="display__username">
              {username ? `@${username}` : '@johndoe'}
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
        handleSubmit={triggerFirebaseUpdateProfile}
      />
    </div>
  );
}

export default function Galery() {
  const [feedsList, setFeedsList] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [showModalAddPost, setShowModalAddPost] = useState(-1);

  const { currentUser } = useAuth();

  //State for Detail and Add Post
  const [detailPost, setDetailPost] = useState({});
  const [userDetail, setUserDetail] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFilePath, setSelectedFilePath] = useState('');
  const [caption, setCaption] = useState('Write your caption here!');

  // useEffect Fetch data from firebase
  useEffect(() => {
    getFeedsById(currentUser.uid, setFeedsList);
    getUserById(currentUser.uid, setUserDetail);
  }, []);

  // For Triggering modal image --> Start
  function triggerShowModalDetailPost(feed) {
    setIsOpen(!isOpen);
    setDetailPost(feed);
  }

  // For Triggering modal add image --> Start
  const triggerShowModalAddPost = () => {
    if (showModalAddPost == -1) {
      setShowModalAddPost(2);
    } else {
      setShowModalAddPost(-1);
    }
  };

  function stateCaptionInput(e) {
    setCaption(e.target.value);
  }

  function triggerClientUpload(e) {
    handleClientUpload(e, setSelectedFile, setSelectedFilePath);
  }

  function triggerFirebaseUpload() {
    handleFirebaseUpload(
      currentUser.uid,
      caption,
      selectedFile,
      setSelectedFile,
      setSelectedFilePath,
      setCaption,
      setShowModalAddPost
    );
  }

  return (
    <>
      <Display />
      <h2 className="judulbatik">Galeri Batique</h2>
      <ImageGrid feeds={feedsList} onClick={triggerShowModalDetailPost} />
      {isOpen && (
        <ImageModal
          detailPost={detailPost}
          userDetail={userDetail}
          isOpen={isOpen}
          handleClose={() => setIsOpen(false)}
        />
      )}
      <Button
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
      >
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
      </Button>
      <AddImageModal
        selectedFilePath={selectedFilePath}
        selectedFile={selectedFile}
        closeWindowHandler={triggerShowModalAddPost}
        clientUpload={triggerClientUpload}
        firebaseUpload={triggerFirebaseUpload}
        setCaptionInput={stateCaptionInput}
        captionInput={caption}
        currentUser={userDetail}
        show={showModalAddPost}
      />
    </>
  );
}
