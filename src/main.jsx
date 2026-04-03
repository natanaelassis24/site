import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const categories = [
  { label: 'BICICLETAS', value: 'bicycles' },
  { label: 'SCOOTERS', value: 'scooters' },
  { label: 'ACESSORIOS', value: 'accessories' },
];

const store = {
  name: 'POUPA BIKE',
  type: 'Bicycle repair shop in São José dos Campos, State of São Paulo',
  address: 'R. Tottoni, 596 - Jardim Oriente, São José dos Campos - SP, 12236-020',
  hours: 'Open · Closes 6 PM',
  logo: '/468440490_1332681157718709_5156759874307211932_n.jpg',
};

const bikes = [
  { id: 'versys', category: 'bicycles', brand: 'SUZUKI', name: 'KLE650 VERSYS', price: '$ 11 900', stats: ['649 cc', '69 hp', '190 kg'], image: '/Honda_sce_concept0001-jpg.webp' },
  { id: 'ktm', category: 'bicycles', brand: 'KTM', name: '1190 KTM', price: '$ 9 500', stats: ['1195 cc', '150 hp', '212 kg'], image: '/16235_moto-scooter-sc-20-2000w-67v-preto-brilho-boram_z2_638556022997147327.webp' },
  { id: 'ninja', category: 'bicycles', brand: 'KAWASAKI', name: 'NINJA GRS750', price: '$ 12 200', stats: ['748 cc', '106 hp', '204 kg'], image: '/img-1-w7.webp' },
  { id: 'gs', category: 'bicycles', brand: 'BMW', name: 'R1200GS ADVENTURE', price: '$ 13 900', stats: ['1170 cc', '125 hp', '241 kg'], image: '/scooter_eletrica_x12_1000w_sem_cnh_moto_chefe_19_1_3d9cdf9c6e215646bb3f75ad66f90446.webp' },
  { id: 'rebel', category: 'bicycles', brand: 'HONDA', name: 'REBEL', price: '$ 7 600', stats: ['1084 cc', '86 hp', '223 kg'], image: '/Honda_sce_concept0001-jpg.webp', span: 'wide' },
  { id: 'mx', category: 'bicycles', brand: 'HONDA', name: 'TC CR MOTOCROSS', price: '$ 9 500', stats: ['449 cc', '53 hp', '111 kg'], image: '/bicicleta_eletrica_joy_super_800w_sem_cnh_moto_chefe_17_variacao_245_1_bb8d0cc3a11dac97ec7ac558897139b5-685d77a0f3c61.webp' },
  { id: 'rt', category: 'bicycles', brand: 'BMW', name: 'R 1200 RT', price: '$ 13 500', stats: ['1170 cc', '125 hp', '279 kg'], image: '/img-1-w7.webp' },
  { id: 'gs2', category: 'scooters', brand: 'BMW', name: 'R1200GS ADVENTURE', price: '$ 13 900', stats: ['1170 cc', '125 hp', '241 kg'], image: '/16235_moto-scooter-sc-20-2000w-67v-preto-brilho-boram_z2_638556022997147327.webp' },
  { id: 'motocross2', category: 'scooters', brand: 'HONDA', name: 'TC CR MOTOCROSS', price: '$ 9 500', stats: ['449 cc', '53 hp', '111 kg'], image: '/bicicleta_eletrica_joy_super_800w_sem_cnh_moto_chefe_17_variacao_245_1_bb8d0cc3a11dac97ec7ac558897139b5-685d77a0f3c61.webp' },
  { id: 'ktm2', category: 'scooters', brand: 'KTM', name: '1190 KTM', price: '$ 9 500', stats: ['1195 cc', '150 hp', '212 kg'], image: '/16235_moto-scooter-sc-20-2000w-67v-preto-brilho-boram_z2_638556022997147327.webp' },
  { id: 'versys2', category: 'accessories', brand: 'SUZUKI', name: 'KLE650 VERSYS', price: '$ 11 900', stats: ['649 cc', '69 hp', '190 kg'], image: '/Honda_sce_concept0001-jpg.webp' },
  { id: 'gs3', category: 'accessories', brand: 'BMW', name: 'R1200GS ADVENTURE', price: '$ 13 900', stats: ['1170 cc', '125 hp', '241 kg'], image: '/img-1-w7.webp' },
  { id: 'gs4', category: 'electric', brand: 'BMW', name: 'R1200GS ADVENTURE', price: '$ 13 900', stats: ['1170 cc', '125 hp', '241 kg'], image: '/scooter_eletrica_x12_1000w_sem_cnh_moto_chefe_19_1_3d9cdf9c6e215646bb3f75ad66f90446.webp' },
];

function BikeCard({ bike, span = '' }) {
  return (
    <article className={`card ${span}`}>
      <div className="card-head">
        <span className="card-brand">{bike.brand}</span>
        <span className="card-price">{bike.price}</span>
      </div>
      <h3>{bike.name}</h3>
      <div className="card-art">
        <img className="bike-photo" src={bike.image} alt="" />
      </div>
      <div className="card-stats">
        {bike.stats.map((stat) => (
          <div key={stat} className="stat">
            <strong>{stat}</strong>
            <span>spec</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function WideCard({ bike }) {
  return <BikeCard bike={bike} span="span-2 wide-card" />;
}

function FeatureCard() {
  return (
    <article className="feature-card span-3">
      <div className="feature-visual">
        <img className="bike-photo feature-photo" src="/Honda_sce_concept0001-jpg.webp" alt="" />
      </div>
      <div className="feature-overlay">
        <div className="feature-copy">
          <p>FEATURED COLLECTION</p>
          <h3>SPORTSTER</h3>
          <strong>$ 17 600</strong>
        </div>
        <div className="feature-stats">
          <div>
            <span>960 cc</span>
            <strong>243 kg</strong>
          </div>
          <div>
            <span>102 hp</span>
            <strong>145 km/h</strong>
          </div>
        </div>
      </div>
    </article>
  );
}

function StoreLogo({ compact = false }) {
  return (
    <div className={`store-logo ${compact ? 'compact' : ''}`}>
      <img src={store.logo} alt={store.name} />
    </div>
  );
}

function ContactPage({ onBack }) {
  const storeLocation = store.address;

  return (
    <div className="page contact-page">
      <header className="header">
        <div className="header-inner">
          <StoreLogo compact />
          <nav className="nav-tabs" aria-label="Main">
            <button type="button" onClick={onBack}>
              CATÁLOGO
            </button>
            <button type="button" className="active">
              CONTATO
            </button>
          </nav>
          <div className="searchbar contact-search">
            <input type="text" value="Contato da loja" readOnly aria-label="Contato da loja" />
            <button type="button" aria-label="Contato">
              <span className="search-icon" />
            </button>
          </div>
        </div>
      </header>

      <main className="content contact-content">
        <section className="contact-card contact-page-card place-card">
          <div className="place-visual">
            <div className="place-photo place-photo-map">
              <iframe
                title="Localização da loja"
                src={`https://www.google.com/maps?q=${encodeURIComponent(storeLocation)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="contact-copy place-copy">
            <div className="contact-brand">
              <StoreLogo />
            </div>
            <p className="eyebrow">CONTACT</p>
            <h1>{store.name}</h1>
            <p className="contact-text">{store.type}</p>

            <div className="contact-actions">
              <a
                className="contact-button"
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(storeLocation)}`}
                target="_blank"
                rel="noreferrer"
              >
                Directions
              </a>
              <a
                className="contact-secondary"
                href={`https://www.google.com/search?q=${encodeURIComponent(store.name + ' avaliações')}`}
                target="_blank"
                rel="noreferrer"
              >
                Reviews
              </a>
              <a
                className="contact-secondary"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeLocation)}`}
                target="_blank"
                rel="noreferrer"
              >
                Save
              </a>
              <a
                className="contact-secondary"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeLocation)}`}
                target="_blank"
                rel="noreferrer"
              >
                Share
              </a>
            </div>

            <div className="contact-grid">
              <div className="contact-item">
                <span>Address</span>
                <strong>{storeLocation}</strong>
              </div>
              <div className="contact-item">
                <span>Hours</span>
                <strong>{store.hours}</strong>
              </div>
              <div className="contact-item">
                <span>Phone</span>
                <strong>Not informed</strong>
              </div>
              <div className="contact-item">
                <span>Website</span>
                <strong>Not informed</strong>
              </div>
            </div>

            <div className="contact-linkline">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeLocation)}`}
                target="_blank"
                rel="noreferrer"
              >
                See on Google Maps
              </a>
              <button type="button" onClick={onBack}>
                Back to catalog
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = React.useState('motorcycles');
  const [draftQuery, setDraftQuery] = React.useState('');
  const [query, setQuery] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [expanded, setExpanded] = React.useState(false);
  const [view, setView] = React.useState('catalog');

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return bikes.filter((bike) => {
      const matchesCategory = bike.category === activeCategory;
      const matchesQuery = !q || bike.brand.toLowerCase().includes(q) || bike.name.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const visible = filtered.length ? filtered : bikes;
  const offset = (page - 1) * 3;
  const pick = (index) => visible[(index + offset) % visible.length];

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setQuery(draftQuery);
    setPage(1);
  };

  if (view === 'contact') {
    return <ContactPage onBack={() => setView('catalog')} />;
  }

  return (
    <div className="page">
      <header className="header">
        <div className="header-inner">
          <StoreLogo compact />
          <nav className="nav-tabs" aria-label="Main">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                className={category.value === activeCategory ? 'active' : ''}
                onClick={() => {
                  setActiveCategory(category.value);
                  setPage(1);
                }}
              >
                {category.label}
              </button>
            ))}
            <button type="button" onClick={() => setView('contact')}>
              CONTATO
            </button>
          </nav>
          <form className="searchbar" onSubmit={handleSearchSubmit}>
            <input
              type="search"
              placeholder="Search..."
              aria-label="Search bikes"
              value={draftQuery}
              onChange={(event) => setDraftQuery(event.target.value)}
            />
            <button type="submit" aria-label="Search">
              <span className="search-icon" />
            </button>
          </form>
        </div>
      </header>

      <main className="content">
        <section className="catalog" id="catalogo">
          <div className="catalog-grid top-row">
            <BikeCard bike={pick(0)} />
            <BikeCard bike={pick(1)} />
            <BikeCard bike={pick(2)} />
            <BikeCard bike={pick(3)} />
          </div>

          <div className="catalog-grid middle-row">
            <WideCard bike={pick(4)} />
            <BikeCard bike={pick(5)} />
            <BikeCard bike={pick(6)} />
          </div>

          <div className="catalog-grid feature-row">
            <BikeCard bike={pick(7)} />
            <FeatureCard />
          </div>

          <div className="catalog-grid bottom-row">
            <BikeCard bike={pick(8)} />
            <BikeCard bike={pick(9)} />
            <BikeCard bike={pick(10)} />
            <BikeCard bike={pick(11)} />
          </div>

          {expanded ? (
            <div className="catalog-grid bottom-row more-row">
              <BikeCard bike={pick(12)} />
              <BikeCard bike={pick(0)} />
              <BikeCard bike={pick(1)} />
              <BikeCard bike={pick(2)} />
            </div>
          ) : null}

          <div className="pagination">
            <button type="button" className="see-more" onClick={() => setExpanded((value) => !value)}>
              {expanded ? 'SHOW LESS' : 'SEE MORE'}
            </button>
            <div className="pages" role="tablist" aria-label="Pages">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  type="button"
                  className={num === page ? 'active' : ''}
                  onClick={() => setPage(num)}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-links left">
            <a href="#catalogo">BICICLETAS</a>
            <a href="#catalogo">SCOOTERS</a>
            <a href="#catalogo">ACESSORIOS</a>
          </div>
          <StoreLogo compact />
          <div className="footer-links right">
            <a href="#catalogo">ABOUT US</a>
            <a href="#catalogo">PLACE AD</a>
            <button type="button" className="footer-link-button" onClick={() => setView('contact')}>
              CONTACT
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
