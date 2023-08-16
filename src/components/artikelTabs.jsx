import { useState, useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import '@/assets/style/artikelTabs.css';
import '@/assets/style/artikelCard.css';


import ArtikelCard from './artikelCard';
import Button from './Button';

export default function artikeTabs( {
    artikel,
    generateExcerpt,
}) {
    
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const uniqueCategories = [...new Set(artikel.map(item => item.category))];
    const { currentUser } = useAuth(); 
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    }
    const handleSearchInputChange = (event) => {
        if (event.key === 'Enter') {
          setSearchQuery(event.target.value);
        }
    };
    const filteredArtikel = artikel.filter(item => {
        const categoryMatch = !activeCategory || item.category === activeCategory;
        const searchMatch = !searchQuery || 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase());
        return categoryMatch && searchMatch;
      });
      
      const searchFilter = artikel.filter(item => {
        const searchMatch = !searchQuery || 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase());
        return searchMatch;
      });
      
//       const tabsRef = useRef(null);

//   useEffect(() => {
//     if (props.location.state && props.location.state.scrollTo === 'tabs' && tabsRef.current) {
//       tabsRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [props.location.state]);
      
    return (
        <div  id="tabs" className="container-tabs">
            <div className="cards">
            <ArtikelCard
                artikel={filteredArtikel} 
                excerptVisible={true} 
                generateExcerpt={generateExcerpt}
            />
            </div>
            <div className='side-menu'>
                {currentUser ? (
                <>
                <div className="categories">
                    <div className="head-category">
                        <span>
                            Jelajahi Berbagai Macam Topik
                        </span>
                    </div>
                    <div className="content-category">
                        
                        {
                                uniqueCategories.map((category,index)=>(
                                <Button key={index}  onClick={() => setActiveCategory(category)}
                                    variant='outlined' size='small' style={{ marginRight: 5,
                                    marginBottom: 8, borderRadius:20 }}>
                                {category}
                                </Button>
                            ))
                        }
                        
                    </div>
                </div>
                </>
                ) : (
                <>
                    <div className="explore">
                        <input className="search__input" type="text" 
                        placeholder="Jelajahi Berbagai Macam Topik..."
                        onKeyDown={handleSearchInputChange}
                        />
                    </div>
                    <div className="categories">
                        <div className="head-category">
                            <span>
                                Jelajahi Berbagai Macam Topik
                            </span>
                        </div>
                        <div className="content-category">    
                            {
                                uniqueCategories.map((category,index)=>(
                                <Button key={index}  onClick={() => setActiveCategory(category)}
                                    variant='outlined' size='small' style={{ marginRight: 5,
                                    marginBottom: 8, borderRadius:20 }}>
                                {category}
                                </Button>
                                ))
                            }   
                        </div>
                    </div>    
                </>
                    
                )}
               
            </div>
            
        </div>
    );
}
