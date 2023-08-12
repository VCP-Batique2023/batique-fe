import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10vh 0',
        }}
      >
        <h1 style={{ fontSize: 36 }}>Halaman Tidak Ada</h1>
        <p style={{ fontSize: 18 }}>
          Maaf, halaman yang Anda ingin kunjungi tidak ditemukan
        </p>
      </section>
    </motion.main>
  );
}
