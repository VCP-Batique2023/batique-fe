import ArtikelTabs from '@/components/artikelTabs';
import ArtikelCard from '@/components/artikelCard';
import ArtikelHeader from '@/components/artikelHeader';
import ImageHeader from '@/components/ImageHeader';
import GaleryHeader from '@/assets/img/1.jpg';
import '@/assets/style/artikel.css'

  
export default function artikel() {

  return (
    <div >
      <ArtikelHeader/>
      <ArtikelTabs/>
    </div>
  )
}
  
