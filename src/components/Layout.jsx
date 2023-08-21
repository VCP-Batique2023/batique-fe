import {
  NavLink,
  useNavigate,
  createSearchParams,
  useAsyncError,
} from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useMobile } from '@/contexts/MobileContext';
import { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import Button from '@/components/Button';
import SearchBox from '@/components/SearchBox';
import Backdrop from '@/components/Backdrop';
import AddImageModalForNav from '@/components/AddImageModalForNav';
import '@/assets/style/Layout.css';
import '@/assets/style/Button.css';
import defaultProfilePicture from '@/assets/img/empty-avatar.png';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '@/modules/firebase_config.js';
import {
  handleClientUpload,
  handleFirebaseUpload,
} from '@/modules/FeedsModules';
export default function Layout() {
  const navigate = useNavigate();
  const { currentUser, userSignOut } = useAuth();
  const { isMobile, isTablet } = useMobile();
  const [isMenu, setIsMenu] = useState(false);
  const [profile, setProfile] = useState(null);

  const [isOpenAdPostForNav, setIsOpenAdPostForNav] = useState(false);
  const [captionForNav, setCaptionForNav] = useState(
    'Write your caption here!'
  );
  const [selectedFileForNav, setSelectedFileForNav] = useState('');
  const [selectedFilePathForNav, setSelectedFilePathForNav] = useState('');

  const handleSignOut = async () => {
    navigate('/');
    await userSignOut();
  };

  useEffect(() => {
    if (currentUser) {
      const profileRef = doc(db, 'users', currentUser.uid);
      const unsubscribe = onSnapshot(profileRef, (snapshot) => {
        if (snapshot.exists()) {
          setProfile(snapshot.data());
        }
      });
      return unsubscribe;
    }
    return () => {};
  }, [currentUser]);

  const handleSearch = (val) => {
    navigate({
      pathname: 'artikel',
      search: createSearchParams({
        cari: val,
      }).toString(),
    });
    window.scrollTo(0, 0);
  };
  function triggerShowModalAddPostForNav() {
    setIsOpenAdPostForNav(!isOpenAdPostForNav);
  }

  function stateCaptionInputForNav(e) {
    setCaptionForNav(e.target.value);
  }

  function triggerClientUploadForNav(e) {
    handleClientUpload(e, setSelectedFileForNav, setSelectedFilePathForNav);
  }

  async function triggerFirebaseUploadForNav() {
    const firebaseUpload = await handleFirebaseUpload(
      captionForNav,
      selectedFileForNav,
      selectedFilePathForNav,
      currentUser.uid,
      setIsOpenAdPostForNav,
      setSelectedFileForNav,
      setSelectedFilePathForNav,
      setCaptionForNav
    );
    if (!firebaseUpload) {
      setIsOpenAdPostForNav(!isOpenAdPostForNav);
    }
  }

  return (
    <>
      {!isMobile && (
        <nav className="nav-container">
          <div className="nav-flex">
            <h2 onClick={() => navigate('/')} className="logo">
              Batique
            </h2>
            {!isMobile && (
              <>
                {currentUser && (
                  <ul>
                    <NavLink
                      to="/"
                      className={({ isActive }) => {
                        return `nav-link ${isActive ? 'active' : ''}`;
                      }}
                    >
                      {!isTablet ? (
                        'Home'
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          width={24}
                          height={24}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                      )}
                    </NavLink>
                    <NavLink
                      to="/galeri"
                      className={({ isActive }) => {
                        return `nav-link ${isActive ? 'active' : ''}`;
                      }}
                    >
                      {!isTablet ? (
                        'Galeri'
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          width={26}
                          height={26}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                      )}
                    </NavLink>
                    <NavLink
                      to="/artikel"
                      className={({ isActive }) => {
                        return `nav-link ${isActive ? 'active' : ''}`;
                      }}
                    >
                      {!isTablet ? (
                        'Artikel'
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          width={26}
                          height={26}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                          />
                        </svg>
                      )}
                    </NavLink>
                  </ul>
                )}
                {!currentUser ? (
                  <ul>
                    <NavLink
                      to="/"
                      className={({ isActive }) => {
                        return `nav-link ${isActive ? 'active' : ''}`;
                      }}
                    >
                      {!isTablet ? (
                        'Home'
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          width={26}
                          height={26}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                      )}
                    </NavLink>
                    <NavLink
                      to="/tentang"
                      className={({ isActive }) => {
                        return `nav-link ${isActive ? 'active' : ''}`;
                      }}
                    >
                      {!isTablet ? (
                        'Tentang'
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          width={26}
                          height={26}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                          />
                        </svg>
                      )}
                    </NavLink>
                    <NavLink
                      to="/artikel"
                      className={({ isActive }) => {
                        return `nav-link ${isActive ? 'active' : ''}`;
                      }}
                    >
                      {!isTablet ? (
                        'Artikel'
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          width={26}
                          height={26}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                          />
                        </svg>
                      )}
                    </NavLink>
                    <div>
                      <Button
                        onClick={() => navigate('/masuk')}
                        variant="outlined"
                      >
                        Masuk
                      </Button>
                      <Button
                        onClick={() => navigate('/daftar')}
                        style={{ marginLeft: 16 }}
                        variant="contained"
                      >
                        Daftar
                      </Button>
                    </div>
                  </ul>
                ) : (
                  <>
                    <SearchBox
                      placeholder="Cari Artikel"
                      search={(val) => handleSearch(val)}
                    />
                    <section>
                      <svg
                        onClick={triggerShowModalAddPostForNav}
                        className="btn-outlined-primary nav-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        width={28}
                        height={28}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      {isOpenAdPostForNav && (
                        <AddImageModalForNav
                          selectedFilePath={selectedFilePathForNav}
                          selectedFile={selectedFileForNav}
                          clientUpload={triggerClientUploadForNav}
                          firebaseUpload={triggerFirebaseUploadForNav}
                          currentUser={profile}
                          captionInput={captionForNav}
                          setCaptionInput={stateCaptionInputForNav}
                          handleClose={() => setIsOpenAdPostForNav(false)}
                        />
                      )}
                      <svg
                        onClick={handleSignOut}
                        className="btn-outlined-primary nav-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        width={28}
                        height={28}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>
                      <div className="profile">
                        <img
                          onClick={() => navigate('/profil')}
                          src={profile?.profilePicture || defaultProfilePicture}
                          className="nav-profile"
                          width={36}
                          height={36}
                        />
                      </div>
                    </section>
                  </>
                )}
              </>
            )}
          </div>
        </nav>
      )}
      {isMobile && (
        <>
          <div
            style={
              isMenu
                ? {
                    backgroundColor: '#372b22',
                  }
                : {}
            }
            className="nav-hamburger"
          >
            <Hamburger
              toggled={isMenu}
              toggle={setIsMenu}
              size={28}
              color={isMenu ? '#f9f8f5' : '#372b22'}
              easing="ease"
              rounded
            />
          </div>
          <AnimatePresence>
            {isMenu && (
              <>
                <motion.div
                  initial={{
                    right: '-100%',
                  }}
                  animate={{
                    right: 0,
                  }}
                  exit={{
                    right: '-100%',
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="nav-hamburger-menu"
                >
                  <ul>
                    <NavLink
                      to="/"
                      onClick={() => {
                        setIsMenu(false);
                      }}
                      className={({ isActive }) => {
                        return `nav-link ${isActive ? 'active' : ''}`;
                      }}
                    >
                      Home
                    </NavLink>
                    {!currentUser ? (
                      <NavLink
                        to="/tentang"
                        onClick={() => {
                          setIsMenu(false);
                        }}
                        className={({ isActive }) => {
                          return `nav-link ${isActive ? 'active' : ''}`;
                        }}
                      >
                        Tentang
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/galeri"
                        onClick={() => {
                          setIsMenu(false);
                        }}
                        className={({ isActive }) => {
                          return `nav-link ${isActive ? 'active' : ''}`;
                        }}
                      >
                        Galeri
                      </NavLink>
                    )}
                    <NavLink
                      to="/artikel"
                      onClick={() => {
                        setIsMenu(false);
                      }}
                      className={({ isActive }) => {
                        return `nav-link ${isActive ? 'active' : ''}`;
                      }}
                    >
                      Artikel
                    </NavLink>
                    {currentUser ? (
                      <>
                        <NavLink
                          to="/profile"
                          onClick={() => {
                            setIsMenu(false);
                          }}
                          className={({ isActive }) => {
                            return `nav-link ${isActive ? 'active' : ''}`;
                          }}
                        >
                          Profile
                        </NavLink>
                        <Button
                          onClick={() => handleSignOut()}
                          variant="outlined"
                          size="large"
                        >
                          Keluar
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          onClick={() => navigate('/masuk')}
                          variant="outlined"
                          size="large"
                        >
                          Masuk
                        </Button>
                        <Button
                          onClick={() => navigate('/daftar')}
                          variant="contained"
                          size="large"
                        >
                          Daftar
                        </Button>
                      </>
                    )}
                  </ul>
                </motion.div>
                <Backdrop onClick={() => setIsMenu(false)} blur={false} />
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
