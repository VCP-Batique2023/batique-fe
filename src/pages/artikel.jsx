import ArtikelTabs from '@/components/artikelTabs';
import ArtikelHeader from '@/components/artikelHeader';
import '@/assets/style/artikel.css'
import { motion } from 'framer-motion';

  
export default function artikel() {

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ArtikelHeader/>
      <ArtikelTabs/>
    </motion.main>
  )
}
  
