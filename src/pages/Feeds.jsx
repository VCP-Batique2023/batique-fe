/* eslint-disable react/no-children-prop */
// Import package
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Import custom package
import {
  getAllFeeds,
  getUserById,
  handleClientUpload,
  handleFirebaseUpload,
} from '@/modules/FeedsModules';
import { useAuth } from '@/contexts/AuthContext';

// Import JSX Component
import ImageHeader from '@/components/ImageHeader';
import ImageGrid from '@/components/ImageGrid';
import ImageModal from '@/components/ImageModal';
import AddImageModal from '@/components/AddImageModal';
import Button from '@/components/Button';

// Import Image Component
import GaleryHeader from '@/assets/img/1.jpg';

export default function Galery() {
  const { currentUser } = useAuth();
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth >= 992 ? '60vh' : '30vh'
  );
  const [feedsList, setFeedsList] = useState([]);

  const [activeSort, setActiveSort] = useState('default');
  const { ref: targetButtonRef, inView: targetButtonIsVisible } = useInView();
  const [isOpen, setIsOpen] = useState(false);
  // const [showModalDetailPost, setShowModalDetailPost] = useState(-1);
  const [showModalAddPost, setShowModalAddPost] = useState(-1);

  //State for Detail and Add Post
  const [detailPost, setDetailPost] = useState({});
  const [userDetail, setUserDetail] = useState({});
  const [currentUserForAddFeed, setUserCurrentForAddFeed] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFilePath, setSelectedFilePath] = useState('');
  const [caption, setCaption] = useState('Write your caption here!');

  // useEffect Fetch data from firebase
  useEffect(() => {
    getAllFeeds(setFeedsList);
    getUserById(currentUser.uid, setUserCurrentForAddFeed);
  }, []);

  // useEffect(() => {
  //   console.log(detailPost);
  // }, [isOpen]);

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
  function resizeScreenHandler() {
    if (window.innerWidth >= 992) {
      setScreenWidth('60vh');
    } else {
      setScreenWidth('40vh');
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resizeScreenHandler);

    return () => {
      window.removeEventListener('resize', resizeScreenHandler);
    };
  }, []);

  // For Triggering modal image --> Start
  function triggerShowModalDetailPost(feed) {
    setIsOpen(!isOpen);
    getUserById(feed.userId, setUserDetail);
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
      caption,
      selectedFile,
      selectedFilePath,
      currentUser.uid,
      setShowModalAddPost,
      setSelectedFile,
      setSelectedFilePath,
      setCaption
    );
  }

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
        currentUser={currentUserForAddFeed}
        show={showModalAddPost}
      />
    </>
  );
}
