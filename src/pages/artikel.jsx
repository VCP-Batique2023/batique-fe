import ArtikelTabs from '@/components/artikelTabs';
import ArtikelHeader from '@/components/artikelHeader';
import '@/assets/style/artikel.css'
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
  
export default function artikel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ArtikelHeader/>
      <ArtikelTabs/>
    </motion.main>
  )
}
  
