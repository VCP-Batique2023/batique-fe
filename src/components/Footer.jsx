import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import '@/assets/style/Footer.css';

export default function Footer() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  return (
    <footer className="footer-container">
      <h2 onClick={() => navigate('/')} className="logo">
        Batique
      </h2>
      <p>
        Batique memiliki komitmen mendalam dalam menjaga dan mengembangkan
        warisan budaya Indonesia melalui seni batik. Batique akan menjadi ruang
        berekspresi bagi seniman muda berbakat untuk menggali potensi kreatif
        mereka dalam seni batik.
      </p>
      <section className="footer-flex">
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return `footer-link ${isActive ? 'active' : ''}`;
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/tentang"
            className={({ isActive }) => {
              return `footer-link ${isActive ? 'active' : ''}`;
            }}
          >
            Tentang
          </NavLink>
          <NavLink
            to="/artikel"
            className={({ isActive }) => {
              return `footer-link ${isActive ? 'active' : ''}`;
            }}
          >
            Artikel
          </NavLink>
          {currentUser ? (
            <>
              <NavLink
                to="/galeri"
                className={({ isActive }) => {
                  return `footer-link ${isActive ? 'active' : ''}`;
                }}
              >
                Galeri
              </NavLink>
              <NavLink
                to="/profil"
                className={({ isActive }) => {
                  return `footer-link ${isActive ? 'active' : ''}`;
                }}
              >
                Profil
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/masuk"
                className={({ isActive }) => {
                  return `footer-link ${isActive ? 'active' : ''}`;
                }}
              >
                Masuk
              </NavLink>
              <NavLink
                to="/daftar"
                className={({ isActive }) => {
                  return `footer-link ${isActive ? 'active' : ''}`;
                }}
              >
                Daftar
              </NavLink>
            </>
          )}
        </ul>
      </section>
      <div className="spacer" />
      <section className="footer-credit">
        <p>Dibuat dengan 💖 oleh tim Batique</p>
        <p className="copyright">Copyright &copy; 2023 Batique</p>
      </section>
    </footer>
  );
}
