import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import AnimatedText from '@/components/AnimatedText';
import AnimatedImage from '@/components/AnimatedImage';
import Button from '@/components/Button';
import RedirectHome from '@/components/RedirectHome';
import ShowcaseGrid from '@/components/ShowcaseGrid';
import img1 from '@/assets/img/1.jpg';
import img2 from '@/assets/img/2.jpg';
import img3 from '@/assets/img/3.jpg';
import img4 from '@/assets/img/4.jpg';
import img5 from '@/assets/img/5.jpg';
import '@/assets/style/Home.css';

// Temporary
const arr = [img3, img1, img5, img4, img3, img3];

export default function Home() {
  const navigate = useNavigate();
  // const { currentUser } = useAuth()
  let currentUser;
  currentUser = null;

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
        ease: [0.2, 0.7, 0.3, 0.9],
      },
    },
  };

  const parallaxRef = useRef(null);

  const useParallax = (value, distance) => {
    return useTransform(value, [0, 1], [-distance, distance]);
  };

  const { scrollYProgress } = useScroll({ target: parallaxRef });
  const parallaxY = useParallax(scrollYProgress, 150);

  return (
    <main>
      <header>
        <section className="hero-section">
          <div className="content">
            <AnimatedText
              text="Batik, “Melukis Keindahan di Setiap Helaian Kehidupan.”"
              firstWord
              background
            />
          </div>
          <AnimatedImage src={img1} alt={'Gambar melukis batik'} />
        </section>
        {!currentUser && (
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
              variants={container}
              className="content"
            >
              <AnimatedText text="Tentang Kami" background />
              <motion.p
                variants={item}
                style={{
                  marginTop: 12,
                }}
              >
                Batique hadir sebagai sebuah platform online berbasis web yang
                memungkinkan seniman muda berbakat yang memiliki minat besar
                terhadap seni batik untuk mengembangkan kreativitas dan ekspresi
                seni mereka.
              </motion.p>
              <motion.p
                variants={item}
                style={{
                  marginTop: 8,
                }}
              >
                Melalui pengadaan program edukasi dan kampanye sosial, batik
                bisa dihidupkan kembali dan diintegrasikan ke dalam kehidupan
                sehari-hari generasi muda.
              </motion.p>
              <motion.div
                variants={item}
                style={{
                  marginTop: 28,
                }}
              >
                <Button onClick={() => navigate('/tentang')} variant="outlined" size="large" >
                  Selengkapnya
                </Button>
              </motion.div>
            </motion.div>
          </section>
        )}
      </header>
      {currentUser && (
        <section className="most-liked-section">
          <AnimatedText
            text="Temukan Inspirasi dari Ide-Ide Terbaik Komunitas Kami."
            style={{
              marginBottom: 48,
            }}
            firstWord
            align="center"
          />
          <ShowcaseGrid />
          <RedirectHome
            label="Libatkan dirimu dengan menjelajahi dan berbagi ide"
            redirectLabel="Tampilkan Galeri"
            path="/gallery"
          />
        </section>
      )}
      {!currentUser && (
        <section className="middle-section">
          <svg
            style={{
              marginBottom: -7,
            }}
            width="100%"
            height="100%"
            viewBox="0 0 1440 136"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.994499 53.486L79.0612 76.3692C159.117 99.6821 319.228 144.804 479.339 127.937C639.45 110.425 799.562 30.9251 959.673 7.61216C1119.78 -15.271 1279.89 19.1075 1359.95 36.2967L1440 53.486L1440 135.5H1359.94C1279.89 135.5 1119.78 135.5 959.667 135.5C799.555 135.5 639.444 135.5 479.333 135.5C319.222 135.5 159.111 135.5 79.0554 135.5H-1.00017L-0.994499 53.486Z"
              fill="#372B22"
            />
          </svg>
          <div className="content">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{
                delayChildren: 0.75,
                staggerChildren: 0.25,
                type: 'tween',
              }}
              variants={container}
              className="content-title"
            >
              <AnimatedText
                ref={parallaxRef}
                text="Jelajahi Dunia Pesona Batik yang Menakjubkan dengan Aman disini!"
                style={{
                  color: '#f0eee6',
                }}
                align="center"
                firstWord
              />
              <motion.div
                variants={item}
                style={{
                  marginTop: 24,
                }}
              >
                <Button
                  onClick={() => navigate('/daftar')}
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Mulai Sekarang!
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              style={{ y: parallaxY }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '0px 0px -240px 0px' }}
              className="content-images"
            >
              {arr.map((image, index) => (
                <img key={index} src={image} alt={`image-${index + 1}`} />
              ))}
            </motion.div>
          </div>
          <svg
            style={{
              marginTop: -3,
            }}
            width="100%"
            height="100%"
            viewBox="0 0 1440 136"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1440 82.014L1359.94 59.1308C1279.89 35.8179 1119.78 -9.30387 959.665 7.56308C799.553 25.0746 639.442 104.575 479.331 127.888C319.22 150.771 159.111 116.393 79.0557 99.2033L-0.999878 82.014L-0.995972 0H79.0596C159.115 0 319.226 0 479.337 0C639.448 0 799.56 0 959.671 0C1119.78 0 1279.89 0 1359.95 0H1440L1440 82.014Z"
              fill="#372B22"
            />
          </svg>
        </section>
      )}
      <section className="end-section">
        <AnimatedText
          text="Melangkah dalam Petualangan Menginspirasi, Temukan Makna Estetika dalam Setiap Helai Batik dengan Artikel."
          align="center"
          firstWord
        />
      </section>
    </main>
  );
}
