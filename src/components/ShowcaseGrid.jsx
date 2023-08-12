// Temporary
import img5 from '@/assets/img/5.jpg';
import img8 from '@/assets/img/8.jpg';
import img9 from '@/assets/img/9.jpg';
import img10 from '@/assets/img/10.jpg';
import img11 from '@/assets/img/11.jpg';
import img12 from '@/assets/img/12.jpg';
import img13 from '@/assets/img/13.jpg';

import { motion } from 'framer-motion';
import '@/assets/style/ShowcaseGrid.css';

const showcaseArr = [img5, img10, img9, img8, img11, img13, img12];

export default function ShowcaseGrid() {
  const container = {
    hidden: {},
    show: {},
  };

  const box = {
    hidden: {
      opacity: 0,
      translateY: 24,
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

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{
        staggerChildren: 0.25,
        type: "tween",
      }}
      className="grid-showcase"
    >
      {showcaseArr.slice(0, 7).map((image, index) => (
        <motion.div variants={box} key={index} className="image-container">
          <img src={image} alt={`Showcase Post ${index}`} />
        </motion.div>
      ))}
    </motion.div>
  );
}
