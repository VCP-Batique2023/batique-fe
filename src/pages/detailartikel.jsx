import { motion } from 'framer-motion';
import { useLocation, useParams } from 'react-router-dom';
import '@/assets/style/detailartikel.css';

export default function DetailArtikel() {
  const location = useLocation();
  const { index } = useParams();
  const artikel = location.state?.artikel;

  if (!artikel || !artikel[index]) {
    return <div>Loading...</div>;
  }

  const selectedCard = artikel[index];

  return (
    <motion.main
      className="container-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="title">
        <h1>{selectedCard.title}</h1>
      </div>
      <img src={selectedCard.img} alt="" className="cover" />
      <div className="content">
        <p>{selectedCard.content}</p>
      </div>
    </motion.main>
  );
}
