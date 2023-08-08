import { motion } from 'framer-motion';
import '@/assets/style/AnimatedText.css';

export default function AnimatedText({
  text,
  style,
  align = 'start',
  firstWord = false,
}) {
  const alignScope = ['start', 'center', 'end'];
  if (!alignScope.includes(align)) {
    align = 'start';
  }

  const textSplit = text.split(' ');

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
        justifyContent: align,
        fontFamily: ['Playfair Display', 'serif'],
        ...style,
      }}
      aria-label={text}
    >
      {textSplit.map((word, index) => (
        <motion.span
          style={
            firstWord && index !== 0
              ? {
                  fontSize: 24,
                }
              : {
                  fontSize: 36,
                  letterSpacing: 4,
                  fontWeight: 'bold',
                  marginBottom: -3
                }
          }
          aria-hidden="true"
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={AnimatedTextVariants}
          transition={{
            delay: index * 0.1 + 0.15 * (1 / textSplit.length),
            duration: 0.5,
            ease: [0.2, 0.7, 0.3, 0.9],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
