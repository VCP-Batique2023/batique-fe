import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedText from '@/components/AnimatedText';
import AnimatedImage from '@/components/AnimatedImage';
import Button from '@/components/Button';
import img1 from '@/assets/img/1.jpg';
import img2 from '@/assets/img/2.jpg';
import '@/assets/style/Home.css';

export default function Home() {
  const navigate = useNavigate();

  const container = {
    hidden: {},
    show: {},
  };

  const item = {
    hidden: {
      opacity: 0,
      translateY: '32px',
    },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.75,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <header>
      <section className="hero-section">
        <div className="content">
          <AnimatedText
            text="Batik, “Melukis Keindahan di Setiap Helaian Kehidupan.”"
            firstWord
          />
        </div>
        <AnimatedImage src={img1} alt={'Gambar melukis batik'} />
      </section>
      <section className="hero-section">
        <AnimatedImage src={img2} alt={'Gambar tentang batique'} />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{
            delayChildren: 0.35,
            staggerChildren: 0.25,
            type: 'tween',
          }}
          variant={container}
          className="content"
        >
          <AnimatedText text="Tentang Kami" />
          <motion.p
            variants={item}
            style={{
              marginTop: 8,
            }}
          >
            Batique hadir sebagai sebuah platform online berbasis web yang
            memungkinkan seniman muda berbakat yang memiliki minat besar
            terhadap seni batik untuk mengembangkan kreativitas dan ekspresi
            seni mereka.
          </motion.p>
          <motion.div
            variants={item}
            style={{
              marginTop: 24,
            }}
          >
            <Button onClick={() => navigate('/tentang')} variant="contained">
              Selengkapnya
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </header>
  );
}
