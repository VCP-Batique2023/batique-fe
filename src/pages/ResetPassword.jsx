import '@/assets/style/Auth.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useMobile } from '@/contexts/MobileContext';
import { caption } from '@/modules/utils';

import img1 from '@/assets/img/1.jpg';

import TextField from '@/components/TextField';
import Button from '@/components/Button';

function ResetPassword() {
  const navigate = useNavigate();
  const { userResetPassword } = useAuth();
  const { isMobile } = useMobile();

  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastReset = toast.loading('Mohon ditunggu...');

    if (!email) {
      toast.error('Email salah');
    }

    try {
      await userResetPassword(email);
      toast.success('Email reset telah dikirim', {
        id: toastReset,
      });
      setEmail('');
    } catch (err) {
      const code = err.code.split('/');

      toast.error(
        code[0] !== 'auth'
          ? 'Error, coba lagi nanti'
          : caption(code[1].replaceAll('-', ' ')),
        {
          id: toastReset,
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
        {!isMobile && (
          <div className="side-card">
            <h2 className="logo">Batique</h2>
            <img src={img1} alt="" />
          </div>
        )}
        <form className="form-card" onSubmit={handleResetPassword}>
          <h1 className="form-title">Atur Ulang Kata Sandi</h1>
          <div className="form-flex">
            <TextField
              id="email"
              label="Alamat Email"
              type="email"
              placeholder="budisantoso@example.com"
              value={email}
              setValue={setEmail}
            />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            }}>
              <Button
                style={{
                  marginTop: 12,
                }}
                disabled={loading}
              >
                Reset
              </Button>
              <p>Masukkan alamat email yang telah terdaftar</p>
            </div>
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

export default ResetPassword;
