import { useState, useEffect } from 'react';
import ArtikelTabs from '@/components/artikelTabs';
import ArtikelHeader from '@/components/artikelHeader';
import {getAllArtikel} from '@/modules/artikelModule'
import '@/assets/style/artikel.css'
import { motion } from 'framer-motion';

  
export default function artikel({

}) {
    
    // const artikel = [
    //     {
    //         title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
    //         category : "History",
    //         img:"https://source.unsplash.com/random/367x217/?batik",
    //         link : "#home",
           
    //     },
    //     {
    //         title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
    //         category : "DIY",
    //         img:"https://source.unsplash.com/random/367x217/?batik",
    //         link : "#about",
            
    //     },
    //     {
    //         title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
    //         category : "Filter",
    //         img:"https://source.unsplash.com/random/367x217/?batik",
    //         link : "#experience",
            
            
    //     },
    //     {
    //         title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
    //         category : "History",
    //         img:"https://source.unsplash.com/random/367x217/?batik",
    //         link : "#home",
           
    //     },
    //     {
    //         title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
    //         category : "DIY",
    //         img:"https://source.unsplash.com/random/367x217/?batik",
    //         link : "#about",
            
    //     },
    //     {
    //         title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
    //         category : "Filter",
    //         img:"https://source.unsplash.com/random/367x217/?batik",
    //         link : "#experience",
            
            
    //     },
    //     {
    //         title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
    //         category : "History",
    //         img:"https://source.unsplash.com/random/367x217/?batik",
    //         link : "#home",
           
    //     },
    //     {
    //         title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
    //         category : "DIY",
    //         img:"https://source.unsplash.com/random/367x217/?batik",
    //         link : "#about",
            
    //     },
    //     {
    //         title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
    //         category : "Filter",
    //         img:"https://source.unsplash.com/random/367x217/?batik",
    //         link : "#experience",
            
            
    //     },
    //     {
    //         title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
    //         category : "History",
    //         img:"https://source.unsplash.com/random/367x217/?batik",
    //         link : "#home",
           
    //     },
    //     {
    //         title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
    //         category : "DIY",
    //         img:"https://source.unsplash.com/random/367x217/?batik",
    //         link : "#about",
            
    //     },
    //     {
    //         title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
    //         category : "Filter",
    //         img:"https://source.unsplash.com/random/367x217/?batik",
    //         link : "#experience",
            
            
    //     },
    //     {
    //         title:"Ini nyoba artikel",
    //         content: "ini ceritanya konten. gak tau mau nulis apa tapi yang penting ada lah yak.",
    //         category : "Filter",
    //         img:"https://source.unsplash.com/random/367x217/?batik",
    //         link : "#experience",
            
            
    //     }
    // ]
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

