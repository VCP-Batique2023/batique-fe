import { NavLink, useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import '@/assets/style/Layout.css';

export default function Layout() {
  const navigate = useNavigate();

  return (
    <nav className="nav-container">
      <div className="nav-flex">
        <h2 className="logo">Batique</h2>
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
      </div>
    </nav>
  );
}
