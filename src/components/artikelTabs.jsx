import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { caption } from '@/modules/utils';
import '@/assets/style/artikelTabs.css';
import '@/assets/style/artikelCard.css';
import GridLoader from 'react-spinners/GridLoader';

import ArtikelCard from './artikelCard';
import Button from './Button';

export default function ArtikeTabs({ artikel, search }) {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [filteredArtikel, setFilteredArtikel] = useState([]);

  useEffect(() => {
    if (artikel) {
      setUniqueCategories([...new Set(artikel.map((item) => item.category))]);
      setFilteredArtikel(
        artikel.filter((item) => {
          const categoryMatch =
            !activeCategory || item.category === activeCategory;
          const searchMatch =
            searchQuery === '' ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.content.toLowerCase().includes(searchQuery.toLowerCase());
          return categoryMatch && searchMatch;
        })
      );
    }
    if(search) {
      setSearchQuery(search);
    }
  }, [activeCategory, artikel, search, searchQuery]);

  const { currentUser } = useAuth();

  const handleSearchInputChange = (event) => {
    if (event.key === 'Enter') {
      setSearchQuery(event.target.value);
      
    }
  };

  return (
    <div id="tabs" className="container-tabs">
      <div className="tabs-cards">
        {search && filteredArtikel && (
          <h2 style={{ marginTop: 32 }}>
            {filteredArtikel.length > 0
              ? `Hasil pencarian "${search}"`
              : `Tidak ada hasil untuk pencarian "${search}"`}
          </h2>
        )}
        {artikel ? (
          <ArtikelCard
            artikel={filteredArtikel}
            excerptVisible={true}
            onClick={(index) => {
              navigate(`/artikel/${index}`, { state: { artikel } });
            }}
          />
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '68px 0',
            }}
          >
            <GridLoader color="#372B22" />
          </div>
        )}
      </div>
      <div className="side-menu">
        {!currentUser && <div className="explore">
          <input
            className="search__input"
            type="text"
            placeholder="Cari Artikel..."
            onKeyDown={handleSearchInputChange}
          />
        </div>}

        <div className="categories">
          <div className="head-category">
            <span>Jelajahi Berbagai Macam Topik</span>
          </div>
          <div className="content-category">
            {uniqueCategories.map((category, index) => (
              <Button
                key={index}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? 'contained' : 'outlined'}
                size="small"
                style={{
                  marginRight: 5,
                  marginBottom: 8,
                  borderRadius: 20,
                }}
              >
                {caption(category)}
              </Button>
            ))}
            <Button
              key="all"
              onClick={() => setActiveCategory(null)} // Set activeCategory to null to show all
              variant="outlined"
              size="small"
              style={{ marginRight: 5, marginBottom: 8, borderRadius: 20 }}
            >
              Tampilkan Semua
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
