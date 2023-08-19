import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import { useMobile } from '@/contexts/MobileContext';
import '@/assets/style/RedirectHome.css';

export default function RedirectHome({ style, label, redirectLabel, path }) {
  const navigate = useNavigate();
  const { isMobile } = useMobile();

  return (
    <div style={style} className="redirect">
      <p>{label}</p>
      {!isMobile && (
        <svg
          style={{
            flexShrink: 0,
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={24}
          height={24}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      )}
      <Button
        style={{
          flexShrink: 0,
        }}
        onClick={() => navigate(path)}
        variant="outlined"
        size="large"
      >
        {redirectLabel}
      </Button>
    </div>
  );
}
