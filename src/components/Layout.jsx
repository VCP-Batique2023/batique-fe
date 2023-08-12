import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/Button';
import SearchBox from '@/components/SearchBox';
import '@/assets/style/Layout.css';
import '@/assets/style/Button.css';
import img1 from '@/assets/img/5.jpg';

export default function Layout() {
  const navigate = useNavigate();
  // const { currentUser } = useAuth();
  let currentUser;
  currentUser = true;

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
                style={{
                  padding: 4,
                  boxShadow: '0 0 0 1px #372b22',
                  borderRadius: 8,
                  pointerEvents: 'all',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease-in-out',
                }}
                className="btn-outlined-primary"
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
              <img
                style={{
                  borderRadius: 99,
                  cursor: 'pointer',
                }}
                src={img1}
                className="nav-profile"
                width={36}
                height={36}
              />
            </section>
          </>
        )}
      </div>
    </nav>
  );
}
