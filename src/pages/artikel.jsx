import { useState, useEffect } from 'react';
import ArtikelTabs from '@/components/artikelTabs';
import ArtikelHeader from '@/components/artikelHeader';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/modules/firebase_config';
import '@/assets/style/artikel.css'

  
export default function artikel({

}) {
    const [artikel, setArtikel] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'artikel')); 
                const artikelData = querySnapshot.docs.map((doc) => doc.data());
                setArtikel(artikelData);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchData();
    }, []);
    const generateExcerpt = (content) => {
        const words = content.split(' ');
        const excerpt = words.slice(0, 20).join(' ') + (words.length > 10 ? '...' : '');
        return excerpt;
      };
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
        <div >
        <ArtikelHeader/>
        <ArtikelTabs artikel={artikel} generateExcerpt={generateExcerpt}/>
        </div>
    )
}
  
