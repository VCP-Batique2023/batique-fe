import { createRoot } from 'react-dom/client';
import { AuthProvider } from '@/contexts/AuthContext';
import { MobileProvider } from '@/contexts/MobileContext';
import { BrowserRouter } from 'react-router-dom';
import App from '@/pages/App.jsx';
import ScrollTop from '@/components/ScrollTop';
import '@/assets/style/index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <AuthProvider>
      <MobileProvider>
        <ScrollTop />
        <App />
      </MobileProvider>
    </AuthProvider>
  </BrowserRouter>
);
