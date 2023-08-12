import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';

export default function RedirectHome({ label, redirectLabel, path }) {
  const navigate = useNavigate();

  const style = {
    padding: 32,
    display: 'flex',
    gap: 16,
    color: '#372b22',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
  };

  return (
    <div style={style} className="redirect">
      <p>{label}</p>
      <svg
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
      <Button onClick={() => navigate(path)} variant="outlined" size="large">
        {redirectLabel}
      </Button>
    </div>
  );
}
