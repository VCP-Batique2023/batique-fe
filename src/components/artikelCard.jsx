import '@/assets/style/artikelCard.css';
import ArtikelContent from '@/components/artikelContent'

      
export default function ArtikelCard({
  artikel,
  onClick,
  excerptVisible = true,
}) {
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
