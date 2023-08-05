import { useEffect, useRef } from 'react';
import { useInView, useAnimation, motion } from 'framer-motion';

export default function AnimatedImage({ src, alt, inView }) {
  const control = useAnimation();
  const image = useRef(null);
  const isInView = inView || useInView(image, {
    once: true,
    margin: "0px -100px -100px 0px"
  });

  useEffect(() => {
    if (isInView) {
      control.start('visible');
    }
    if (!isInView) {
      control.start('hidden');
    }
  }, [control, isInView]);

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
      ref={image}
      initial="hidden"
      animate={control}
      variants={AnimatedImage}
      transition={{
        delay: 0.25,
        duration: 0.75,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
    >
      <img src={src} alt={alt} />
    </motion.div>
  );
}
