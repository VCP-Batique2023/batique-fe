import '@/assets/style/Auth.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { getDoc, doc, writeBatch, serverTimestamp } from 'firebase/firestore';
import { db } from '@/modules/firebase_config';
import { useAuth } from '@/contexts/AuthContext';
import { caption } from '@/modules/utils';

import img1 from '@/assets/img/1.jpg';

import TextField from '@/components/TextField';
import Button from '@/components/Button';
import RadioField from '@/components/RadioField';
import Checkbox from '@/components/Checkbox';
// import { useEffect } from 'react';

function SignUp() {
  const navigate = useNavigate();
  const { userSignUp } = useAuth();

  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetInputValue = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setGender('');
    setDisplayName('');
  };

  const handleBatchWrite = async (userId) => {
    const createdAt = serverTimestamp();
    const batch = writeBatch(db);

    const userRef = doc(db, 'users', userId);
    batch.set(userRef, {
      uid: userId,
      username,
      displayName,
      email,
      gender,
      description: '',
      profilePicture: null,
      createdAt,
    });

    const usernameRef = doc(db, 'usernames', username);
    batch.set(usernameRef, {
      uid: userId,
    });

    await batch.commit();
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const statusSignUp = toast.loading('Mohon ditunggu...');
    if (!username) {
      toast.error('Username tidak valid', {
        id: statusSignUp,
      });
      setLoading(false);
      return;
    }

    try {
      const usernameCheckRef = doc(db, 'usernames', username);
      const usernameDoc = await getDoc(usernameCheckRef);
      if (usernameDoc.exists()) {
        toast.error('Username sudah dipakai', {
          id: statusSignUp,
        });
        setLoading(false);
        return;
      }

      const { user } = await userSignUp(email, password);
      const userId = user.uid;

      await handleBatchWrite(userId);
      resetInputValue();
      toast.success('User berhasil dibuat', {
        id: statusSignUp,
      });
      navigate('/');
    } catch (err) {
      const code = err.code.split('/');
      toast.error(
        code[0] !== 'auth'
          ? 'Error, try again later'
          : caption(code[1].replaceAll('-', ' ')),
        {
          id: statusSignUp,
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
        <form className="form-card" onSubmit={handleSignUp}>
          <h1 className="form-title">Daftar Akun Batique</h1>
          <div className="form-flex">
            <div className="form-inline-flex">
              <TextField
                id="display_name"
                label="Nama Lengkap"
                placeholder="Budi Santoso"
                value={displayName}
                setValue={setDisplayName}
              />
              <TextField
                id="username"
                label="Username"
                value={username}
                setValue={setUsername}
              />
            </div>
            <RadioField
              label="Jenis Kelamin"
              options={['Laki-laki', 'Perempuan']}
              value={gender}
              setValue={setGender}
            />
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
              <Checkbox
              style={{
                marginTop: 16
              }}
                label="Privasi & Ketentuan"
                value={confirm}
                setValue={() => setConfirm(!confirm)}
                required
              />
            </div>
            <Button
              style={{
                marginTop: 24,
              }}
              disabled={loading}
            >
              Daftar Akun
            </Button>
            <p style={{ marginTop: 8 }}>
              Sudah punya akun?{' '}
              <span
                onClick={() => navigate('/masuk')}
                style={{ fontWeight: 500, cursor: 'pointer' }}
              >
                Masuk di sini
              </span>
            </p>
          </div>
        </form>
      </div>
    </motion.main>
  );
}

export default SignUp;
