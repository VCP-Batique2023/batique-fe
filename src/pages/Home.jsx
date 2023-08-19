import { useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useMobile } from '@/contexts/MobileContext';
import { useEffect, useState } from 'react';
import GridLoader from 'react-spinners/GridLoader';
import { db } from '@/modules/firebase_config';
import { query, collection, orderBy, limit, getDocs } from 'firebase/firestore';

import AnimatedText from '@/components/AnimatedText';
import AnimatedImage from '@/components/AnimatedImage';
import AnimatedArrow from '@/components/AnimatedArrow';
import Button from '@/components/Button';
import RedirectHome from '@/components/RedirectHome';
import ShowcaseGrid from '@/components/ShowcaseGrid';
import ArtikelContent from '@/components/artikelContent';

import img1 from '@/assets/img/1.jpg';
import img2 from '@/assets/img/2.jpg';
import img3 from '@/assets/img/3.jpg';
import img4 from '@/assets/img/4.jpg';
import img5 from '@/assets/img/5.jpg';

import '@/assets/style/Home.css';
import '@/assets/style/artikelCard.css';

// Temporary
const arr = [img3, img1, img5, img4, img3, img3];

export default function Home() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { isMobile } = useMobile();
  const [articleData, setArticleData] = useState([]);
  const [mostLikedData, setMostLikedData] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      const articleResults = [];
      const articleRef = collection(db, 'artikel');
      const articleQuery = query(articleRef, orderBy('createdat'), limit(3));
      const articleSnapshot = await getDocs(articleQuery);
      articleSnapshot.forEach((doc) => {
        articleResults.push(doc.data());
      });
      setArticleData(articleResults);
    };

    const fetchFeed = async () => {
      const feedRef = collection(db, 'feeds');
      const feedQuery = query(feedRef, orderBy('like', 'desc'), limit(7));
      const feedSnapshot = await getDocs(feedQuery);
      const feedResults = [];
      feedSnapshot.forEach((doc) => {
        feedResults.push(doc.data());
      });
      setMostLikedData(feedResults);
    };

    fetchFeed();
    fetchArticle();
  }, []);

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

  const renderImage = (arrImage) =>
    arrImage.map((image, index) => (
      <img key={index} src={image} alt={`image-${index + 1}`} />
    ));

  const useParallax = (value, distance) => {
    const multiplier = window.innerHeight / 800;
    return useTransform(
      value,
      [0, 1],
      [(-distance / 1.2) * multiplier, (distance / 1.2) * multiplier]
    );
  };

  const { scrollYProgress } = useScroll({ target: parallaxRef });
  const parallaxY = useParallax(scrollYProgress, 100);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ scrollSnapType: isMobile ? 'y mandatory' : 'none' }}
      ref={parallaxRef}
    >
      <section
        style={
          isMobile
            ? {
                backgroundImage: `linear-gradient(0deg, rgba(136, 110, 80, 0.35), rgba(136, 110, 80, 0.35)), url("${img1}")`,
              }
            : {}
        }
        className="hero-section"
      >
        <div className="content">
          <AnimatedText
            style={
              isMobile
                ? {
                    color: '#F0E0B0',
                  }
                : {}
            }
            text="Batik, “Melukis Keindahan di Setiap Helaian Kehidupan.”"
            firstWord
            background
          />
        </div>
        {isMobile && <AnimatedArrow color="#F0E0B0" />}
        {!isMobile && <AnimatedImage src={img1} alt={'Gambar melukis batik'} />}
      </section>
      {!currentUser && (
        <section
          style={
            isMobile
              ? {
                  backgroundImage: `linear-gradient(0deg, rgba(242, 242, 242, 0.75), rgba(242, 242, 242, 0.75)), url("${img2}")`,
                }
              : {}
          }
          className="hero-section"
        >
          {!isMobile && (
            <AnimatedImage src={img2} alt={'Gambar tentang batique'} />
          )}
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
                marginTop: 18,
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
              Melalui pengadaan program edukasi dan kampanye sosial, batik bisa
              dihidupkan kembali dan diintegrasikan ke dalam kehidupan
              sehari-hari generasi muda.
            </motion.p>
            <motion.div
              variants={item}
              style={{
                marginTop: 32,
              }}
            >
              <Button
                onClick={() => navigate('/tentang')}
                variant="outlined"
                size="large"
              >
                Selengkapnya
              </Button>
            </motion.div>
          </motion.div>
          {isMobile && <AnimatedArrow />}
        </section>
      )}
      {currentUser && (
        <section className="most-liked-section">
          <AnimatedText
            text="Temukan Inspirasi dari Ide-Ide Terbaik Komunitas Kami."
            firstWord
            align="center"
          />
          {mostLikedData.length > 0 ? (
            <ShowcaseGrid
              arr={mostLikedData}
              style={{
                marginTop: 48,
              }}
            />
          ) : (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '0 64px'
            }}>
              <GridLoader color="#372B22" />
            </div>
          )}
          <RedirectHome
            style={{
              marginTop: 48,
            }}
            label="Libatkan dirimu dengan menjelajahi dan berbagi ide"
            redirectLabel="Tampilkan Galeri"
            path="/galeri"
          />
        </section>
      )}
      {!currentUser && (
        <section className="middle-section">
          <svg
            className="wave"
            style={{
              marginBottom: -2,
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
            {isMobile && (
              <div className="mobile-images">{renderImage(arr)}</div>
            )}
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
                  marginTop: 32,
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
            {isMobile && (
              <div
                style={{
                  justifyContent: 'end',
                }}
                className="mobile-images"
              >
                {renderImage(arr.reverse())}
              </div>
            )}
            {isMobile && (
              <AnimatedArrow style={{ bottom: '24vh' }} color="#f0eee6" />
            )}
            {!isMobile && (
              <motion.div
                style={{ y: parallaxY }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '0px 0px -240px 0px' }}
                className="content-images"
              >
                {renderImage(arr)}
              </motion.div>
            )}
          </div>
          <svg
            className="wave"
            style={{
              marginTop: -2,
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
        {articleData.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: isMobile ? '0px 0px -120px 0px' : '0px 0px -240px 0px',
            }}
            transition={{
              staggerChildren: 0.25,
              type: 'tween',
            }}
            className="recent-article"
          >
            {articleData.map((article, index) => (
              <motion.div key={index} variants={item}>
                <ArtikelContent
                  excerptVisible={true}
                  item={article}
                  onClick={() =>
                    navigate(`/artikel/${index}`, {
                      state: { artikel: articleData },
                    })
                  }
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0 64px'
          }}>
            <GridLoader color="#372B22" />
          </div>
        )}
        <RedirectHome
          style={{
            marginTop: 48,
          }}
          label="Pelajari dan terapkan berbagai ilmu mengenai batik"
          redirectLabel="Lihat Artikel"
          path="/artikel"
        />
      </section>
    </motion.main>
  );
}
