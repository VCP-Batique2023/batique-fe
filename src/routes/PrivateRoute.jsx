import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '@/contexts/AuthContext';
export default function PrivateRoute({ element }) {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) toast.error('Kamu harus masuk terlebih dahulu');
  }, [currentUser]);

  return currentUser ? (
    element
  ) : (
    <main>
      <Navigate to="/masuk" />
    </main>
  );
}
