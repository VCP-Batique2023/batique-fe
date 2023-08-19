import '@/assets/style/artikelCard.css';
import { truncate } from '@/modules/utils';
import { Timestamp } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { getArtikelById }  from '@/modules/'

      
export default function artikelCard({
    artikel,
    excerptVisible = true, 
    formatTimestamp
  }) {
    function formatTimestamp(timestamp) {
      if (!timestamp) {
        return ''; 
      }
      const now = new Date();
      const createdAt = timestamp.toDate();
      const elapsedMilliseconds = now - createdAt;
      const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
      
      if (elapsedSeconds < 60) {
        return 'just now';
      } else if (elapsedSeconds < 3600) {
        const minutesAgo = Math.floor(elapsedSeconds / 60);
        return `${minutesAgo} minutes ago`;
      } else if (elapsedSeconds < 86400) {
        const hoursAgo = Math.floor(elapsedSeconds / 3600);
        return `${hoursAgo} hours ago`;
      } else if (elapsedSeconds < 172800) {
        return 'yesterday';
      } else {
        const daysAgo = Math.floor(elapsedSeconds / 86400);
        return `${daysAgo} days ago`;
      }
    }
    const navigate = useNavigate();
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const handleCardClick = (index) => {
      setSelectedCardIndex(index);
      navigate(`/artikel/${index}`, { state: { artikel } });
    };
    // const handleCardClick = async (articleId) => {
    //   try {
    //     const retrievedData = await getArtikelById(articleId); // Call the imported function
    //     setSelectedCardIndex(articleId);
    //     navigate(`/artikel/${articleId}`, { state: { artikel: retrievedData } });
    //   } catch (error) {
    //     console.error('Error fetching article:', error);
    //   }
    // };
  
    return (
      <div className="container-card">
        {artikel.map((item, index) => (
          <div key={index}>
            <div className="card" onClick={() => handleCardClick(index)}>
              <div className="image-wrapper">
                <img src={item.img} alt="" />
              </div>
              <div className="card-header">
                <div className='category'>
                  <a href="#">{item.category}</a>
                </div>
                <a href="#">{truncate(item.title, 40)}</a>
                <span>{formatTimestamp(item.createdat)}</span>
                {excerptVisible && <span>{truncate(item.content, 150)}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  

