import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
// import toast from 'react-hot-toast';
import { useAuth } from '@/contexts/AuthContext';

export default function PrivateRoute({ element }) {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) console.log('You need to be signed in');
  }, [currentUser]);

  return true ? (
    element
  ) : (
    <main>
      <Navigate to="/masuk" />
    </main>
  );
}
