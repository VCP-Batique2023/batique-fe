import '@/assets/style/AnimatedArrow.css';

export default function AnimatedArrow({ style, color = "#372b22" }) {
  return (
    <svg
      style={style}
      className="scroll-arrow"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      height={36}
      width={36}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
