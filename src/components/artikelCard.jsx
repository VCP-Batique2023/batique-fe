import '@/assets/style/artikelCard.css';
import { truncate } from '@/modules/utils';
import { Timestamp } from 'firebase/firestore';
import { useState, useEffect } from 'react';
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
                <a href="#">{truncate(item.title, 50)}</a>
                {/* <span>{formatRelativeTime(item.createdat)}</span> */}
                {excerptVisible && <span>{truncate(item.content, 150)}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  

