import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@/assets/style/artikelTabs.css';
import '@/assets/style/artikelCard.css';


import ArtikelCard from './artikelCard';
import Button from './Button';

export default function artikeTabs() {
  
    const artikel = [
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "History",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#home",
           
        },
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "DIY",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#about",
            
        },
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "Filter",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#experience",
            
            
        },
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "History",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#home",
           
        },
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "DIY",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#about",
            
        },
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "Filter",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#experience",
            
            
        },
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "History",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#home",
           
        },
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "DIY",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#about",
            
        },
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "Filter",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#experience",
            
            
        },
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "History",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#home",
           
        },
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "DIY",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#about",
            
        },
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "Filter",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#experience",
            
            
        },
        {
            title:"Ini nyoba artikel",
            content: "ini ceritanya konten. gak tau mau nulis apa tapi yang penting ada lah yak.",
            category : "Filter",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#experience",
            
            
        }
    ]
    
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const uniqueCategories = [...new Set(artikel.map(item => item.category))];
    // const content = artikel.content.split(' ');
    // const excerpt = content.slice(0, 50).join(' ');


    
    const navigate = useNavigate();

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    }
    const handleSearchInputChange = (event) => {
        if (event.key === 'Enter') {
          setSearchQuery(event.target.value);
        }
    };

    // handle search with no enter
    // const filteredArtikel = artikel.filter(item => {
    //     const categoryMatch = !activeCategory || item.category === activeCategory;
    //     const searchMatch = searchQuery === '' || item.title.toLowerCase().includes(searchQuery.toLowerCase()); 
    //     return categoryMatch && searchMatch;
    // });
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
      
      
      
      
    return (
        <div className="container-tabs">
            <div className="cards">
            <ArtikelCard
                artikel={filteredArtikel} 
                excerptVisible={true} 
                onClick={(index) => {
                    setSelectedCardIndex(index)
                    navigate(`/artikel/${index}`, { state: { artikel } });
                }}
            />
            </div>
            <div className='side-menu'>
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
            </div>
        </div>
    );
}
