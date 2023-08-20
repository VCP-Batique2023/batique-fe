import { motion } from 'framer-motion';
import { useLocation, useParams } from 'react-router-dom';
import '@/assets/style/detailArtikel.css';
import { useNavigate } from 'react-router-dom';
import GridLoader from 'react-spinners/GridLoader';

export default function DetailArtikel() {
  const location = useLocation();
  const { index } = useParams();
  const artikel = location.state?.artikel;
  const navigate = useNavigate();

  const navigateToArtikel = () => {
    navigate('/artikel'); // Replace with the actual route for the "artikel" page
  };

  // if (!artikel || !artikel[index]) {
  //   return <div style={{ height:"100vh",margin:"auto"}}>Loading...</div>;

  // }

  function formatTimestamp(timestamp) {
    if (!timestamp) {
      return '';
    }

    const createdAt = new Date(timestamp.seconds * 1000);
    return createdAt.toLocaleDateString();
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
    <>
      {selectedCard ? (
        <motion.main
          className="container-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div style={{ width: '30px' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              onClick={navigateToArtikel}
              style={{ cursor: 'pointer' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </div>

          <div className="title">
            <h1>{selectedCard.title}</h1>
          </div>
          <div className="time">
            <span>{formatTimestamp(selectedCard.createdat)}</span>
          </div>
          <img src={selectedCard.img} alt="" className="cover" />
          <div className="content">
            {/* Check if selectedCard.content contains <br> tags */}
            {selectedCard.content.includes('<br>') ? (
              <p dangerouslySetInnerHTML={{ __html: selectedCard.content }} />
            ) : (
              <p>{selectedCard.content.replace(/\n/g, '<br>')}</p>
            )}
          </div>
        </motion.main>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '68px 0',
          }}
        >
          <GridLoader color="#372B22" />
        </div>
      )}
    </>
  );
}
