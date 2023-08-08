import ArtikelTabs from '@/components/artikelTabs';
import ArtikelCard from '@/components/artikelCard';
import ArtikelHeader from '@/components/artikelHeader';


  
export default function artikel() {
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
  return (
    <div>
      <ArtikelHeader/>
      {/* <ArtikelCard
        artikel={artikel}
        categoryColor="secondary" 
        excerptVisible={true} 
      /> */}
      <ArtikelTabs/>
    </div>
  )
}
  
