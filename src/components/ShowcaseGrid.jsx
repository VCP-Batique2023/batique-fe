import { motion } from 'framer-motion';
import ShowcaseImage from '@/components/ShowcaseImage';
import '@/assets/style/ShowcaseGrid.css';

export default function ShowcaseGrid({ arr, style }) {
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
        type: 'tween',
      }}
      className="grid-showcase"
      style={style}
    >
      {arr.slice(0, 7).map((image, index) => (
        <ShowcaseImage variants={box} image={image} key={index} />
      ))}
    </motion.div>
  );
}
