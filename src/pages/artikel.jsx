import { useState, useEffect } from 'react';
import ArtikelTabs from '@/components/artikelTabs';
import ArtikelHeader from '@/components/artikelHeader';
import { getAllArtikel } from '@/modules/artikelModule';
import '@/assets/style/artikel.css';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

export default function Artikel() {
  const [artikel, setArtikel] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('cari');

  useEffect(() => {
    getAllArtikel(setArtikel);
  }, []);
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {!search && <ArtikelHeader />}
      <ArtikelTabs artikel={artikel} search={search}/>
    </motion.main>
  );
}
