import '@/assets/style/Auth.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/modules/firebase_config';
import { useAuth } from '@/contexts/AuthContext';
import { caption } from '@/modules/utils';

import img1 from '@/assets/img/1.jpg';

import TextField from '@/components/TextField';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';

function SignUp() {
  const navigate = useNavigate();
  const { userSignIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetInputValue = () => {
    setEmail('');
    setPassword('');
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const statusSignIn = toast.loading('Mohon ditunggu...');

    try {
      const userCredential = await userSignIn(email, password);

      const user = await getDoc(doc(db, 'users', userCredential.user.uid));
      const { displayName, username } = user.data();

      resetInputValue();

      toast.success(`Selamat datang, ${displayName || username}`, {
        id: statusSignIn,
      });

      navigate('/');
    } catch (err) {
      const code = err.code.split('/');
      toast.error(
        code[0] !== 'auth'
          ? 'Error, try again later'
          : caption(code[1].replaceAll('-', ' ')),
        {
          id: statusSignIn,
        }
      );
    }
    setLoading(false);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="auth-container"
    >
      <div className="auth-card">
        <div className="side-card">
          <h2 className="logo">Batique</h2>
          <img src={img1} alt="" />
        </div>
        <form className="form-card" onSubmit={handleSignIn}>
          <h1 className="form-title">Selamat Datang di Batique</h1>
          <div className="form-flex">
            <TextField
              id="email"
              label="Alamat Email"
              type="email"
              placeholder="budisantoso@example.com"
              value={email}
              setValue={setEmail}
            />
            <div>
              <TextField
                id="password"
                label="Kata Sandi"
                type="password"
                value={password}
                setValue={setPassword}
              />
              <div
                style={{
                  marginTop: 8,
                }}
                className="form-inline-flex"
              >
                <Checkbox
                  label="Ingat akun saya"
                  value={confirm}
                  setValue={() => setConfirm(!confirm)}
                />
                <p
                  style={{ fontWeight: 500, cursor: 'pointer' }}
                  onClick={() => navigate('/reset')}
                >
                  Lupa password?
                </p>
              </div>
            </div>
            <Button
              style={{
                marginTop: 24,
              }}
              disabled={loading}
            >
              Masuk
            </Button>
            <p style={{ marginTop: 8 }}>
              Belum punya akun?{' '}
              <span
                onClick={() => navigate('/daftar')}
                style={{ fontWeight: 500, cursor: 'pointer' }}
              >
                Daftar di sini
              </span>
            </p>
          </div>
        </form>
      </div>
    </motion.main>
  );
}

export default SignUp;
