import React, { useState } from 'react';
import '@/assets/style/artikelTabs.css';
import '@/assets/style/artikelCard.css';
import '@/assets/style/Layout.css';

import ArtikelCard from './artikelCard';
import Button from './Button';
export default function artikelNav() {
    const categories = [
        "History",
        "DIY",
        "Filter"
    ];
    const artikel = [
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "History",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#home",
           
        },
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "DIY",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#about",
            
        },
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "Filter",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#experience",
            
        }
    ]
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const filteredArtikel = artikel.filter(item => item.category === activeCategory);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    }

    return (
        <div className="container">
            <div className="nav-container">
                <div className="nav-tabs">
                <ul>
                    {categories.map((category, index) => (
                        <li
                            className='main'
                        >
                        <Button
                        className={`btn-outlined-primary ${activeCategory === category ? 'active' : ''}`}
                        key={index}
                        onClick={() => handleCategoryChange(category)}
                        variant="outlined"
                        >
                            {category}
                        </Button>

                        </li>
                    ))}
                </ul>
                </div>
            </div>
            <ArtikelCard
                artikel={filteredArtikel} 
                categoryColor="secondary" 
                excerptVisible={true} 
            />
        </div>
    );
}
