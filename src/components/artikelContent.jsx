import '@/assets/style/artikelCard.css';
import { caption, truncate } from '@/modules/utils';
import { Timestamp } from 'firebase/firestore';

export default function artikelContent({
  index,
  item,
  onClick,
  excerptVisible,
}) {
  
  function formatTimestamp(timestamp) {
    if (!timestamp) {
      return ''; 
    }
    
    const createdAt = timestamp.toDate();
    return createdAt.toLocaleDateString(); 
  }

  return (
    <div className="article-card" onClick={() => onClick(index)}>
      <div className="image-wrapper">
        <img src={item.img} alt="" />
      </div>
      <div className="card-header">
        <div className="category">
          <a>{caption(item.category)}</a>
        </div>
        <a>{item.title}</a>
        <span>{formatTimestamp(item.createdat)}</span>
        {excerptVisible && <span>{truncate(item.content, 250)}</span>}
      </div>
    </div>
  );
}
