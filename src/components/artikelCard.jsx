import '@/assets/style/artikelCard.css';
import ArtikelContent from '@/components/artikelContent'
import { useNavigate } from 'react-router-dom';

      
export default function artikelCard({
  artikel,
  onClick,
  excerptVisible = true,
}) {
  const navigate = useNavigate();
  return (
    <div className="container-card">
      {artikel.map((item, index) => (
        <ArtikelContent
          key={index}
          item={item}
          excerptVisible={excerptVisible}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
}
