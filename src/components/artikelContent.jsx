import '@/assets/style/artikelCard.css';
import { caption, truncate } from '@/modules/utils';

export default function artikelContent({
  index,
  item,
  onClick,
  excerptVisible,
}) {
  return (
    <div className="article-card" onClick={() => onClick(index)}>
      <div className="image-wrapper">
        <img src={item.img} alt="" />
      </div>
      <div className="card-header">
        <div className="category">
          <a href="#">{caption(item.category)}</a>
        </div>
        <a href="#">{item.title}</a>
        {excerptVisible && <span>{truncate(item.content, 250)}</span>}
      </div>
    </div>
  );
}
