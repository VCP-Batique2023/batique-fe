import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/Button';
import SearchBox from '@/components/SearchBox';
import { toast } from 'react-hot-toast';
import '@/assets/style/Layout.css';
import '@/assets/style/Button.css';
import img1 from '@/assets/img/5.jpg';

export default function Layout() {
  const navigate = useNavigate();
  const { currentUser, userSignOut } = useAuth();

  return (
    <nav className="nav-container">
      <div className="nav-flex">
        <h2 onClick={() => navigate('/')} className="logo">
          Batique
        </h2>
        {currentUser && (
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return `nav-link ${isActive ? 'active' : ''}`;
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) => {
                return `nav-link ${isActive ? 'active' : ''}`;
              }}
            >
              Feeds
            </NavLink>
            <NavLink
              to="/artikel"
              className={({ isActive }) => {
                return `nav-link ${isActive ? 'active' : ''}`;
              }}
            >
              Artikel
            </NavLink>
          </ul>
        )}
        {!currentUser ? (
          <ul
            style={{
              gap: 36,
            }}
          >
            <NavLink
              to="/"
              className={({ isActive }) => {
                return `nav-link ${isActive ? 'active' : ''}`;
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/tentang"
              className={({ isActive }) => {
                return `nav-link ${isActive ? 'active' : ''}`;
              }}
            >
              Tentang
            </NavLink>
            <NavLink
              to="/artikel"
              className={({ isActive }) => {
                return `nav-link ${isActive ? 'active' : ''}`;
              }}
            >
              Artikel
            </NavLink>
            <div>
              <Button onClick={() => navigate('/masuk')} variant="outlined">
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
            <SearchBox placeholder="Cari Artikel" />
            <section>
              <svg
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
              <svg
                onClick={() => {
                  navigate('/')
                  userSignOut();
                  toast.success('Berhasil keluar');
                }}
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
                  style={{
                    borderRadius: 99,
                    cursor: 'pointer',
                  }}
                  src={img1}
                  className="nav-profile"
                  width={36}
                  height={36}
                />
              </div>
            </section>
          </>
        )}
      </div>
    </nav>
  );
}
