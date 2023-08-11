import { motion } from 'framer-motion';

export default function AnimatedImage({ src, alt }) {
  const AnimatedImage = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="img-content"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={AnimatedImage}
      transition={{
        delay: 0.25,
        duration: 0.75,
        ease: [0.2, 0.7, 0.3, 0.9],
      }}
    >
      <img src={src} alt={alt} />
    </motion.div>
  );
}
