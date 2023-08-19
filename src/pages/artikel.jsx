import { useState, useEffect } from 'react';
import ArtikelTabs from '@/components/artikelTabs';
import ArtikelHeader from '@/components/artikelHeader';
import {getAllArtikel} from '@/modules/artikelModule'
import '@/assets/style/artikel.css'
import { motion } from 'framer-motion';

  
export default function artikel({

}) {
    
    const [artikel, setArtikel] = useState([]);
    useEffect(() => {
        getAllArtikel(setArtikel);
      }, []);
    
    return (
        <div >
        <ArtikelHeader/>
        <ArtikelTabs artikel={artikel}/>
        </div>
    )
}

