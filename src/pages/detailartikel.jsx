import { motion } from 'framer-motion';
import { useLocation, useParams } from 'react-router-dom';
// import { formatDistanceToNow, format } from 'date-fns';
import "@/assets/style/detailArtikel.css"

export default function DetailArtikel() {
  const location = useLocation();
  const { index } = useParams();
  const artikel = location.state?.artikel;

  if (!artikel || !artikel[index]) {
    return <div>Loading...</div>;
  }

  const selectedCard = artikel[index];
  // const formatRelativeTime = (timestamp) => {
  //   const createdAt = new Date(timestamp * 1000); 
  //   const currentDate = new Date();
  //   const yearDifference = currentDate.getFullYear() - createdAt.getFullYear();
  //   const relativeTime = formatDistanceToNow(createdAt, { addSuffix: true });
  //   if (yearDifference > 0) {
  //       const formattedYear = format(createdAt, 'yyyy');
  //       return `${relativeTime}, ${formattedYear}`;
  //   }

//     return relativeTime;
// };

  return (
    <motion.main
      className="container-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="title">
        <h1>{selectedCard.title}</h1>
      </div>
      {/* <span>{formatRelativeTime(selectedCard.createdat)}</span> */}
      <img src={selectedCard.img} alt="" className="cover" />
      <div className="content">
        <p>{selectedCard.content}</p>
      </div>
    </motion.main>
  );
}
