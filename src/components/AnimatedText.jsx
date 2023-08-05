import { useEffect, useRef } from 'react';
import { useInView, useAnimation, motion } from 'framer-motion';
import '@/assets/style/AnimatedText.css';

export default function AnimatedText({ text, align = 'left', firstWord = false }) {
  const alignScope = ['left', 'center', 'right'];
  if (!alignScope.includes(align)) {
    align = 'left';
  }

  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      control.start('visible');
    }
    if (!isInView) {
      control.start('hidden');
    }
  }, [control, isInView]);

  const AnimatedTextVariants = {
    hidden: {
      opacity: 0,
      translateY: '32px',
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };

  return (
    <div
      className="animated-text"
      style={{
        fontFamily: ['Playfair Display', 'serif'],
      }}
      aria-label={text}
    >
      {text.split(' ').map((word, index) => (
        <motion.span
          style={
            firstWord && index !== 0
              ? {
                  fontSize: 24,
                }
              : {
                fontSize: 36,
                textIndent: 4,
                fontWeight: 'bold',
                translateX: -4
              }
          }
          aria-hidden="true"
          ref={ref}
          key={index}
          initial="hidden"
          animate={control}
          variants={AnimatedTextVariants}
          transition={{
            delay: index * 0.25,
            duration: 0.75,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
