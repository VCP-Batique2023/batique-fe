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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        dolore obcaecati, nostrum nobis culpa error iure molestiae. Nisi quasi
        ipsum nemo numquam fugit, nihil, facilis aspernatur quia, iusto
        perspiciatis tenetur?
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
                to="/gallery"
                className={({ isActive }) => {
                  return `footer-link ${isActive ? 'active' : ''}`;
                }}
              >
                Feeds
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) => {
                  return `footer-link ${isActive ? 'active' : ''}`;
                }}
              >
                Profile
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
