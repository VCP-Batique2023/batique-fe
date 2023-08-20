import { useEffect, useState } from 'react';

import "@/assets/style/artikelHeader.css"
import AnimatedText from "./AnimatedText"
import Button from "./Button"

export default function ArtikelHeader() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showText = scrollY < 200;

  return (
    <div className="header">
         <div className={`cta ${showText ? '' : 'hide'}`} style={{ top: `${50 + scrollY * 0.1}%` }}>
          <AnimatedText
            text="Mari-Eksplor, “Keanggunan dan Kedalaman Budaya dalam Dunia Batik di Artikel.”"
            firstWord 
          />
           
            {/* <Button size='small' style={{ marginRight: 5, marginTop: 15 }}>
              Mulai Sekarang!
            </Button> */}

      </div>
        
    </div>
    
  
  )
}
