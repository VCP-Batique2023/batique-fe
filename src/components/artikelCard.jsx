import '@/assets/style/artikelCard.css';
import { useState, useEffect } from 'react';
import { formatDistanceToNow, format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

      
export default function artikelCard({
    artikel,
    excerptVisible = true, 
    generateExcerpt,
  }) {
    
    const navigate = useNavigate();
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const handleCardClick = (index) => {
      setSelectedCardIndex(index);
      navigate(`/artikel/${index}`, { state: { artikel } });
    };

    const truncateTitle = (title, limit) => {
      const words = title.split(' ');
      const truncatedTitle =
        words.slice(0, limit).join(' ') + (words.length > limit ? '...' : '');
      return truncatedTitle;
    };
  
    const [truncatedTitles, setTruncatedTitles] = useState([]);
  
    useEffect(() => {
      const updateTruncatedTitles = () => {
        const newTruncatedTitles = artikel.map((item) =>
          window.innerWidth <= 575
            ? truncateTitle(item.title, 5)
            : truncateTitle(item.title, 6)
        );
        setTruncatedTitles(newTruncatedTitles);
      };
  
      updateTruncatedTitles();
  
      window.addEventListener('resize', updateTruncatedTitles);
  
      return () => {
        window.removeEventListener('resize', updateTruncatedTitles);
      };
    }, [artikel]);
  
 
    const formatRelativeTime = (timestamp) => {
      const createdAt = new Date(timestamp * 1000); 
      const currentDate = new Date();
      const yearDifference = currentDate.getFullYear() - createdAt.getFullYear();
      const relativeTime = formatDistanceToNow(createdAt, { addSuffix: true });
      if (yearDifference > 0) {
          const formattedYear = format(createdAt, 'yyyy');
          return `${relativeTime}, ${formattedYear}`;
      }
  
      return relativeTime;
  };
  
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
                <a href="#">{truncatedTitles[index]}</a>
                <span>{formatRelativeTime(item.createdat)}</span>
                {excerptVisible && <span>{generateExcerpt(item.content)}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  

