import ImageOverlay from '@/components/ImageOverlay';
// import { checkIsLiked } from '@/modules/FeedsModules';
// import { useAuth } from '@/contexts/AuthContext';
import '@/assets/style/ImageGrid.css';
// import { useEffect, useState } from 'react';

export default function ImageGalery({ feedInformation, onClick, index }) {
  // const { currentUser } = useAuth();
  // const [isLiked, setIsLiked] = useState(false);

  // useEffect(() => {
  //   checkIsLiked(currentUser.uid, feedInformation.likedByAccount, setIsLiked);
  // }, []);

  // console.log('This is overlay : ' + isLiked);
  const sendDataToModal = () => {
    onClick(feedInformation);
  };
  return (
    <div onClick={sendDataToModal} style={{ position: 'relative' }}>
      <h1>{index}</h1>
      <div className="imageContainer">
        <img src={feedInformation.imageUrl} className="image" />
      </div>
      <ImageOverlay feedInformation={feedInformation} />
    </div>
  );
}
