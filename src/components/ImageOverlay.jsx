import '@/assets/style/ImageGrid.css';

/* 
    REQUIREMENT
    Before use this component, make sure the parent element
    should have a relative position (CSS Properties)
*/
function generateDate(x) {
  const date = new Date(x.toDate());
  const tempDate = date.getDate();
  const tempMonth = date.getMonth() + 1;
  const tempYear = date.getFullYear();

  return [tempDate, tempMonth, tempYear].join('/');
}

export default function ImageOverlay({ feedInformation }) {
  return (
    <div className="overlay">
      <div className="postTitle">{feedInformation.caption}</div>
      <div className="postFooter">
        <div className="date">{generateDate(feedInformation.createdAt)}</div>
        <div className="likeCounter">
          <img
            src="https://citizenshospitals.com/wp-content/uploads/2016/12/Heart_Icon_White.png"
            style={{ backgroundColor: 'transparent', maxWidth: '30px' }}
          />
          <p>{feedInformation.like}</p>
        </div>
      </div>
    </div>
  );
}
