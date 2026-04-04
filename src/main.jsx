import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp'];
const MAX_GALLERY_IMAGES = 12;

const categories = [
  { label: 'SCOOTERS', value: 'scooters' },
  { label: 'ACESSORIOS', value: 'accessories' },
];

const store = {
  name: 'POUPA BIKE',
  tagline: 'Catalogo completo com os modelos da sua lista, sem repeticao e com os valores da captura.',
  logo: '/468440490_1332681157718709_5156759874307211932_n.jpg',
  address: 'R. Tottoni, 596 - Jardim Oriente, Sao Jose dos Campos - SP',
  hours: 'Seg a Sab, 09:00 as 18:00',
  phone: '(12) 99123-4567',
  whatsapp: 'https://wa.me/5512991234567',
  maps:
    'https://maps.google.com/maps?hl=pt-BR&q=R.%20Tottoni%2C%20596%20-%20Jardim%20Oriente%2C%20Sao%20Jose%20dos%20Campos%20-%20SP&z=16&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=R.%20Tottoni,%20596%20-%20Jardim%20Oriente,%20Sao%20Jose%20dos%20Campos%20-%20SP',
};

const catalog = [
  {
    id: 'v8',
    category: 'scooters',
    brand: 'BICICLETA ELETRICA',
    name: 'V8',
    badge: 'Da captura',
    price: 'R$ 7.990,00',
    oldPrice: 'R$ 9.990,00',
    galleryFolder: '/v8',
    image: '/v8/1.png',
    summary: 'Bicicleta eletrica modelo V8 com proposta urbana e visual compacto.',
    specs: ['Peso max. 140 kg', 'Motor eletrico', 'Uso urbano', 'Preco da captura'],
    sourceLabel: 'Preco da captura enviada',
    sourceUrl: '#catalogo',
  },
  {
    id: 'goo-pix',
    category: 'scooters',
    brand: 'SCOOTER ELETRICA',
    name: 'Scooter Eletrica Goo Pix',
    badge: 'Catalogo',
    price: 'R$ 4.990,00',
    oldPrice: null,
    galleryFolder: '/goo-pix',
    image:
      'https://static.wixstatic.com/media/6adf91_21baa383155b46d8a66d0b0b6d9f794f~mv2.jpg/v1/fill/w_470,h_470,q_75,enc_avif,quality_auto/6adf91_21baa383155b46d8a66d0b0b6d9f794f~mv2.jpg',
    summary: 'Scooter eletrica compacta para uso urbano diario.',
    specs: [
      'Modelo: PIX',
      'Autonomia: 40 km',
      'Motor: 800W',
      'Bateria: 48V 18Ah',
      'Velocidade: 32 km/h',
      'Sem CNH e emplacamento',
    ],
    sourceLabel: 'Scooter Londrina + preco da captura',
    sourceUrl: 'https://www.scooterlondrina.com.br/modelos',
  },
  {
    id: 'one-1000w',
    category: 'scooters',
    brand: 'SCOOTER ELETRICA',
    name: 'Scooter Eletrica One 1000W',
    badge: 'Catalogo',
    price: 'R$ 6.890,00',
    oldPrice: null,
    galleryFolder: '/one-1000w',
    image:
      'https://static.wixstatic.com/media/c5b38a_54a5222475114f77b9f18954b15d685d~mv2.jpg/v1/fill/w_2252,h_4000,al_c,q_90,enc_avif,quality_auto/c5b38a_54a5222475114f77b9f18954b15d685d~mv2.jpg',
    summary: 'Scooter eletrica 1000W com foco em autonomia e praticidade.',
    specs: [
      'Modelo: ONE',
      'Peso max. 160 kg',
      'Motor: 1000W',
      'Bateria: 48V 20Ah',
      'Autonomia: 50 km',
      'Velocidade: 32 km/h',
    ],
    sourceLabel: 'Scooter Londrina + preco da captura',
    sourceUrl: 'https://www.scooterlondrina.com.br/modelos',
  },
  {
    id: 'rapid-goo-1000w',
    category: 'scooters',
    brand: 'SCOOTER ELETRICA',
    name: 'Scooter Eletrica Rapid Goo 1000W',
    badge: 'Catalogo',
    price: 'R$ 7.300,00',
    oldPrice: null,
    galleryFolder: '/rapid-goo-1000w',
    image:
      'https://static.wixstatic.com/media/c5b38a_30fc964c782e41ed96c9faf4b403941a~mv2.jpg/v1/fill/w_3024,h_4032,al_c,q_90,enc_avif,quality_auto/c5b38a_30fc964c782e41ed96c9faf4b403941a~mv2.jpg',
    summary: 'Scooter eletrica urbana com design moderno e bateria removivel.',
    specs: [
      'Modelo: RAPID',
      'Peso max. 160 kg',
      'Motor: 1000W',
      'Bateria: 60V 23Ah',
      'Autonomia: 50 km',
      'Velocidade: 32 km/h',
    ],
    sourceLabel: 'Scooter Londrina + preco da captura',
    sourceUrl: 'https://www.scooterlondrina.com.br/modelos',
  },
  {
    id: '701-1000w',
    category: 'scooters',
    brand: 'SCOOTER ELETRICA',
    name: 'Scooter Eletrica 701 - 1000W',
    badge: 'Catalogo',
    price: 'R$ 11.990,00',
    oldPrice: null,
    galleryFolder: '/701-1000w',
    image:
      'https://static.wixstatic.com/media/c5b38a_44e7ecfb592342099a192ebaadcc209c~mv2.jpg/v1/fill/w_3024,h_4032,al_c,q_90,enc_avif,quality_auto/c5b38a_44e7ecfb592342099a192ebaadcc209c~mv2.jpg',
    summary: 'Scooter eletrica premium da linha 701 com visual mais robusto.',
    specs: [
      'Modelo: 701',
      'Peso max. 180 kg',
      'Motor: 1000W',
      'Bateria: 60V 23Ah',
      'Autonomia: 50 km',
      'Velocidade: 32 km/h',
    ],
    sourceLabel: 'Scooter Londrina + preco da captura',
    sourceUrl: 'https://www.scooterlondrina.com.br/modelos',
  },
  {
    id: 'x12-brutus-1000w',
    category: 'scooters',
    brand: 'SCOOTER ELETRICA',
    name: 'Scooter Eletrica Goo X12 Brutus 1000W',
    badge: 'Pneu largo',
    price: 'R$ 8.500,00',
    oldPrice: null,
    galleryFolder: '/x12-brutus-1000w',
    image:
      'https://static.wixstatic.com/media/c5b38a_40ea47f3c32645e785c71be6ef86551c~mv2.jpg/v1/fill/w_3024,h_4032,al_c,q_90,enc_avif,quality_auto/c5b38a_40ea47f3c32645e785c71be6ef86551c~mv2.jpg',
    summary: 'Scooter eletrica de pneu largo com visual encorpado para uso urbano.',
    specs: [
      'Modelo: X12 Brutus',
      'Peso max. 180 kg',
      'Motor: 1000W',
      'Autonomia: ate 50 km',
      'Uso urbano',
      'Preco da captura',
    ],
    sourceLabel: 'Preco da captura + familia X12',
    sourceUrl: '#catalogo',
  },
  {
    id: 'tera-1000w',
    category: 'scooters',
    brand: 'SCOOTER ELETRICA',
    name: 'Scooter Eletrica Tera 1000W',
    badge: 'Catalogo',
    price: 'R$ 10.990,00',
    oldPrice: null,
    galleryFolder: '/tera-1000w',
    image:
      'https://static.wixstatic.com/media/c5b38a_31de7c7f2a0345118e8ef73d8a7ea84e~mv2.jpg/v1/fill/w_3000,h_4000,al_c,q_90,enc_avif,quality_auto/c5b38a_31de7c7f2a0345118e8ef73d8a7ea84e~mv2.jpg',
    summary: 'Scooter eletrica esportiva com conjunto 1000W e rodas largas.',
    specs: [
      'Modelo: TERA',
      'Peso max. 180 kg',
      'Motor: 1000W',
      'Bateria: 60V 23Ah',
      'Autonomia: 50 km',
      'Velocidade: 32 km/h',
    ],
    sourceLabel: 'Scooter Londrina + preco da captura',
    sourceUrl: 'https://www.scooterlondrina.com.br/modelos',
  },
  {
    id: 'x12-pro-1000w',
    category: 'scooters',
    brand: 'SCOOTER ELETRICA',
    name: 'Scooter Eletrica X12-Pro 1000W',
    badge: 'Pneu largo',
    price: 'R$ 8.990,00',
    oldPrice: 'R$ 11.990,00',
    galleryFolder: '/x12-pro-1000w',
    image:
      'https://static.wixstatic.com/media/c5b38a_86f8d9911e0148e2a245b89936d31f26~mv2.jpg/v1/fill/w_3024,h_4032,al_c,q_90,enc_avif,quality_auto/c5b38a_86f8d9911e0148e2a245b89936d31f26~mv2.jpg',
    summary: 'Scooter eletrica X12-Pro com proposta urbana e visual agressivo.',
    specs: [
      'Modelo: X12-Pro',
      'Peso max. 180 kg',
      'Motor: 1000W',
      'Autonomia: ate 50 km',
      'Suspensao reforcada',
      'Preco da captura',
    ],
    sourceLabel: 'Preco da captura + acervo local',
    sourceUrl: '#catalogo',
  },
  {
    id: 'amazon-superlet-49cc',
    category: 'scooters',
    brand: 'CICLOMOTOR AMAZON',
    name: 'Ciclomotor Amazon Superlet 4 Tempos 49cc',
    badge: 'Semi automatico',
    price: 'R$ 8.990,00',
    oldPrice: null,
    galleryFolder: '/superlet-4',
    image: 'https://www.lncomercial.com.br/uploads/1/2/9/9/129993666/s889948855525873748_p13_i1_w500.jpeg',
    summary: 'Ciclomotor com motor 49cc e cambio semi automatico para uso urbano leve.',
    specs: ['Marca: Amazon Motors', 'Motor: 49cc', '4 tempos', 'Semi automatico'],
    sourceLabel: 'Preco da captura + LN Comercial',
    sourceUrl: 'https://www.lncomercial.com.br/product-page/superlet-49cc',
  },
  {
    id: 'goo-dudu-1000w',
    category: 'scooters',
    brand: 'SCOOTER ELETRICA',
    name: 'Scooter Eletrica Goo Dudu 1000W',
    badge: 'Retro',
    price: 'R$ 10.500,00',
    oldPrice: 'R$ 11.990,00',
    galleryFolder: '/dudu-1000w',
    image:
      'https://static.wixstatic.com/media/c5b38a_f99997e24fc6474fbf9cabae682823eb~mv2.jpg/v1/fill/w_1999,h_1824,al_c,q_90,enc_avif,quality_auto/c5b38a_f99997e24fc6474fbf9cabae682823eb~mv2.jpg',
    summary: 'Scooter eletrica retrô com bau traseiro e acabamento inspirado em scooters classicas.',
    specs: [
      'Modelo: DUDU',
      'Peso max. 180 kg',
      'Motor: 1000W',
      'Bateria: 60V 23Ah',
      'Autonomia: 50 km',
      'Velocidade: 32 km/h',
    ],
    sourceLabel: 'Scooter Londrina + preco da captura',
    sourceUrl: 'https://www.scooterlondrina.com.br/modelos',
  },
  {
    id: 'patinete-goo-800w',
    category: 'scooters',
    brand: 'PATINETE ELETRICO',
    name: 'Patinete Eletrico Goo - 800W',
    badge: 'Mobilidade',
    price: 'R$ 4.990,00',
    oldPrice: null,
    galleryFolder: '/patinete-800w',
    image: 'https://static.wixstatic.com/media/c5b38a_4ba77c2ec01f49f3ae6fbbe4ebbf3f4a~mv2.png/v1/fill/w_1600,h_1600,al_c,q_90,enc_avif,quality_auto/c5b38a_4ba77c2ec01f49f3ae6fbbe4ebbf3f4a~mv2.png',
    summary: 'Patinete eletrico para deslocamentos curtos e uso leve urbano.',
    specs: [
      'Marca: Goo',
      'Peso max. 120 kg',
      'Motor: 800W',
      'Autonomia: 25 km',
      'Velocidade: 32 km/h',
      'Dobravel',
    ],
    sourceLabel: 'Scooter Londrina + preco da captura',
    sourceUrl: 'https://www.scooterlondrina.com.br/modelos',
  },
  {
    id: 'capacete-aberto',
    category: 'accessories',
    brand: 'ACESSORIO',
    name: 'Capacete Aberto Premium',
    badge: 'Protecao',
    price: 'R$ 299,00',
    oldPrice: null,
    galleryFolder: '/capacete-aberto',
    image: 'https://images.tcdn.com.br/img/img_prod/1060526/capacete_aberto_new_atomic_preto_fosco_pro_tork_14561_1_2f64d4f21cf9e5766a635594073648fe.jpg',
    summary: 'Capacete aberto para uso urbano com viseira e acabamento premium.',
    specs: ['Uso urbano', 'Viseira frontal', 'Forro interno', 'Acessorio real'],
    sourceLabel: 'Referencia comercial de acessorio',
    sourceUrl: 'https://www.protork.com/',
  },
  {
    id: 'disco-freio',
    category: 'accessories',
    brand: 'ACESSORIO',
    name: 'Disco de Freio Ventilado',
    badge: 'Freio',
    price: 'R$ 189,00',
    oldPrice: null,
    galleryFolder: '/disco-freio',
    image: 'https://cdn.awsli.com.br/600x1000/1065/1065324/produto/49665457/disco-de-freio-dianteiro-fan-160-1f2c1af1.jpg',
    summary: 'Disco de freio para reposicao e manutencao do conjunto dianteiro.',
    specs: ['Peca de reposicao', 'Aco reforcado', 'Uso urbano', 'Acessorio real'],
    sourceLabel: 'Referencia comercial de acessorio',
    sourceUrl: 'https://www.magazineluiza.com.br/',
  },
  {
    id: 'bau-traseiro',
    category: 'accessories',
    brand: 'ACESSORIO',
    name: 'Bau Traseiro 28L',
    badge: 'Carga',
    price: 'R$ 249,00',
    oldPrice: null,
    galleryFolder: '/bau-traseiro',
    image: 'https://images.tcdn.com.br/img/img_prod/742781/bauleto_moto_pro_tork_28_litros_smart_box_kit_com_base_universal_623_1_9e8b1c4fd0b2d85a8f4ff7c83879d432.jpg',
    summary: 'Bau traseiro para guardar itens do dia a dia e aumentar a praticidade.',
    specs: ['28 litros', 'Base universal', 'Uso urbano', 'Acessorio real'],
    sourceLabel: 'Referencia comercial de acessorio',
    sourceUrl: 'https://www.protork.com/',
  },
  {
    id: 'x12-pro-max',
    category: 'scooters',
    brand: 'SCOOTER ELETRICA',
    name: 'Scooter Eletrica X12 Pro Max',
    badge: 'Pneu largo',
    price: 'R$ 10.111,00',
    oldPrice: null,
    galleryFolder: '/x12-pro-max',
    image:
      'https://static.wixstatic.com/media/c5b38a_d8ba74ee55244ee6904dbde4b6fe5fa8~mv2.jpg/v1/fill/w_3024,h_4032,al_c,q_90,enc_avif,quality_auto/c5b38a_d8ba74ee55244ee6904dbde4b6fe5fa8~mv2.jpg',
    summary: 'Versao Pro Max da familia X12 com proposta mais robusta para o uso diario.',
    specs: [
      'Modelo: X12 Pro Max',
      'Peso max. 180 kg',
      'Motor: 1000W',
      'Autonomia: ate 50 km',
      'Pneus largos',
      'Preco da captura',
    ],
    sourceLabel: 'Preco da captura + familia X12',
    sourceUrl: '#catalogo',
  },
  {
    id: 'x7-1000w',
    category: 'scooters',
    brand: 'SCOOTER ELETRICA',
    name: 'Scooter Eletrica X7 - 1000W',
    badge: 'Catalogo',
    price: 'R$ 8.990,00',
    oldPrice: null,
    galleryFolder: '/x7-1000w',
    image:
      'https://static.wixstatic.com/media/c5b38a_4188a49e2d854b8ea9761a518fe0d85b~mv2.jpg/v1/fill/w_3024,h_4032,al_c,q_90,enc_avif,quality_auto/c5b38a_4188a49e2d854b8ea9761a518fe0d85b~mv2.jpg',
    summary: 'Scooter eletrica 1000W com visual esportivo e proposta urbana.',
    specs: [
      'Modelo: X7',
      'Peso max. 180 kg',
      'Motor: 1000W',
      'Autonomia: ate 50 km',
      'Uso urbano',
      'Preco da captura',
    ],
    sourceLabel: 'Preco da captura',
    sourceUrl: '#catalogo',
  },
  {
    id: 'triciclo-tri-1000w',
    category: 'scooters',
    brand: 'TRICICLO ELETRICO',
    name: 'Triciclo TRI - 1000W',
    badge: 'Estabilidade',
    price: 'R$ 11.990,00',
    oldPrice: null,
    galleryFolder: '/triciclo-tri-1000w',
    image: 'https://static.wixstatic.com/media/c5b38a_2fd89cb3fcda4177bf2f8d6e10f0ce08~mv2.jpg/v1/fill/w_2250,h_4000,al_c,q_90,enc_avif,quality_auto/c5b38a_2fd89cb3fcda4177bf2f8d6e10f0ce08~mv2.jpg',
    summary: 'Triciclo eletrico com proposta de estabilidade e uso urbano.',
    specs: [
      'Modelo: TRICICLO TRI',
      'Peso max. 190 kg',
      'Motor: 1000W',
      'Autonomia: 50 km',
      'Velocidade: 32 km/h',
      'Carregador bivolt',
    ],
    sourceLabel: 'Scooter Londrina + preco da captura',
    sourceUrl: 'https://www.scooterlondrina.com.br/modelos',
  },
  {
    id: 'amazon-sun-50cc',
    category: 'scooters',
    brand: 'CICLOMOTOR AMAZON',
    name: 'Ciclomotor Amazon Sun 50 CC',
    badge: 'Semi automatico',
    price: 'R$ 9.990,00',
    oldPrice: null,
    galleryFolder: '/sun-50-cc',
    image: 'https://www.motorizzashop.com.br/cdn/shop/files/Ciclomotor_Amazon_Sun_50cc_Azul.png?v=1717526395',
    summary: 'Ciclomotor urbano da linha Amazon com visual leve e mecanica 50cc.',
    specs: ['Marca: Amazon Motors', 'Motor: 50cc', 'Semi automatico', 'Uso urbano'],
    sourceLabel: 'Preco da captura + catalogo varejo',
    sourceUrl: 'https://www.motorizzashop.com.br/products/ciclomotor-amazon-sun-50cc',
  },
];

function makeLocalImageCandidates(folder, index) {
  if (!folder) {
    return [];
  }

  return IMAGE_EXTENSIONS.map((extension) => `${folder}/${index}.${extension}`);
}

function getCoverCandidates(item) {
  return [...makeLocalImageCandidates(item.galleryFolder, 1), item.image].filter(Boolean);
}

function SmartImage({ sources, alt, className = '' }) {
  const validSources = React.useMemo(() => sources.filter(Boolean), [sources]);
  const [sourceIndex, setSourceIndex] = React.useState(0);

  React.useEffect(() => {
    setSourceIndex(0);
  }, [validSources]);

  const currentSource = validSources[sourceIndex] ?? validSources[0] ?? '';

  return (
    <img
      className={className}
      src={currentSource}
      alt={alt}
      onError={() => {
        if (sourceIndex < validSources.length - 1) {
          setSourceIndex((value) => value + 1);
        }
      }}
    />
  );
}

function useResolvedGallery(item) {
  const [gallerySources, setGallerySources] = React.useState([item.image]);

  React.useEffect(() => {
    let cancelled = false;

    const loadImage = (src) =>
      new Promise((resolve) => {
        const image = new window.Image();
        image.onload = () => resolve(src);
        image.onerror = () => resolve(null);
        image.src = src;
      });

    const resolveGallery = async () => {
      const localSources = [];

      if (item.galleryFolder) {
        for (let index = 1; index <= MAX_GALLERY_IMAGES; index += 1) {
          const candidates = makeLocalImageCandidates(item.galleryFolder, index);
          let foundSource = null;

          for (const candidate of candidates) {
            // eslint-disable-next-line no-await-in-loop
            foundSource = await loadImage(candidate);
            if (foundSource) {
              localSources.push(foundSource);
              break;
            }
          }
        }
      }

      const finalSources = [...new Set([...localSources, item.image].filter(Boolean))];
      if (!cancelled) {
        setGallerySources(finalSources.length ? finalSources : [item.image]);
      }
    };

    resolveGallery();

    return () => {
      cancelled = true;
    };
  }, [item]);

  return gallerySources;
}

function StoreLogo() {
  return (
    <div className="store-logo">
      <img src={store.logo} alt={store.name} />
    </div>
  );
}

function ProductCard({ item, onOpen }) {
  return (
    <button type="button" className="product-card" onClick={() => onOpen(item)}>
      <div className="product-card-thumb">
        <SmartImage sources={getCoverCandidates(item)} alt={item.name} />
      </div>
      <div className="product-card-copy">
        <span>{item.brand}</span>
        <strong>{item.name}</strong>
        <small>{item.price}</small>
      </div>
    </button>
  );
}

function ProductModal({ item, onClose }) {
  const gallery = useResolvedGallery(item);
  const [activeImage, setActiveImage] = React.useState(gallery[0]);

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  React.useEffect(() => {
    setActiveImage(gallery[0]);
  }, [item, gallery]);

  React.useEffect(() => {
    if (gallery.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveImage((current) => {
        const currentIndex = gallery.indexOf(current);
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % gallery.length;
        return gallery[nextIndex];
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, [gallery]);

  const activeIndex = gallery.indexOf(activeImage);
  const goPrevImage = () => {
    setActiveImage(gallery[(activeIndex - 1 + gallery.length) % gallery.length]);
  };
  const goNextImage = () => {
    setActiveImage(gallery[(activeIndex + 1) % gallery.length]);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Fechar">
          x
        </button>

        <div className="modal-stage">
          <div className="modal-media">
            <span className="media-badge">{item.badge}</span>
            <SmartImage sources={[activeImage, item.image]} alt={item.name} />
            {gallery.length > 1 ? (
              <>
                <button type="button" className="modal-arrow left" onClick={goPrevImage} aria-label="Imagem anterior">
                  ‹
                </button>
                <button type="button" className="modal-arrow right" onClick={goNextImage} aria-label="Proxima imagem">
                  ›
                </button>
                <div className="modal-dots">
                  {gallery.map((image) => (
                    <button
                      key={image}
                      type="button"
                      className={image === activeImage ? 'active' : ''}
                      onClick={() => setActiveImage(image)}
                      aria-label={`Abrir imagem ${gallery.indexOf(image) + 1}`}
                    />
                  ))}
                </div>
              </>
            ) : null}
          </div>

          <div className="modal-copy">
            <p className="eyebrow">{item.brand}</p>
            <h2>{item.name}</h2>
            <p className="item-summary">{item.summary}</p>

            <div className="price-row">
              <strong>{item.price}</strong>
              {item.oldPrice ? <span>{item.oldPrice}</span> : null}
            </div>

            <div className="spec-grid">
              {item.specs.map((spec) => (
                <div key={spec} className="spec-chip">
                  {spec}
                </div>
              ))}
            </div>

            <div className="actions">
              <a href={item.sourceUrl} target="_blank" rel="noreferrer">
                Ver fonte
              </a>
              <a href={store.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a href={store.mapsLink} target="_blank" rel="noreferrer">
                Ver mapa
              </a>
            </div>

            <p className="source-note">Fonte usada: {item.sourceLabel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="contact-panel" id="contato">
      <div className="section-head">
        <div>
          <p className="eyebrow">Contato</p>
          <h3>Atendimento com mapa</h3>
        </div>
      </div>

      <div className="contact-layout">
        <div className="map-shell">
          <iframe
            title="Mapa da loja"
            src={store.maps}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="contact-side">
          <div className="contact-grid">
            <div className="contact-item">
              <span>Endereco</span>
              <strong>{store.address}</strong>
            </div>
            <div className="contact-item">
              <span>Horario</span>
              <strong>{store.hours}</strong>
            </div>
            <div className="contact-item">
              <span>Telefone</span>
              <strong>{store.phone}</strong>
            </div>
            <div className="contact-item">
              <span>WhatsApp</span>
              <a href={store.whatsapp} target="_blank" rel="noreferrer">
                Abrir atendimento
              </a>
            </div>
          </div>

          <div className="actions contact-actions">
            <a href={store.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={store.mapsLink} target="_blank" rel="noreferrer">
              Ver mapa
            </a>
            <a href={`tel:${store.phone.replace(/\D/g, '')}`}>Ligar</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = React.useState('scooters');
  const [search, setSearch] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [view, setView] = React.useState('catalog');

  const filtered = React.useMemo(() => {
    const q = search.trim().toLowerCase();
    return catalog.filter((item) => {
      const matchesCategory = item.category === activeCategory;
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, search]);

  React.useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory, search]);

  React.useEffect(() => {
    if (filtered.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((value) => (value + 1) % filtered.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [filtered]);

  const currentItem = filtered.length ? filtered[currentIndex % filtered.length] : null;

  const goPrev = () => {
    if (!filtered.length) return;
    setCurrentIndex((value) => (value - 1 + filtered.length) % filtered.length);
  };

  const goNext = () => {
    if (!filtered.length) return;
    setCurrentIndex((value) => (value + 1) % filtered.length);
  };

  if (view === 'contact') {
    return (
      <div className="page">
        <header className="hero-header">
          <div className="hero-top">
            <StoreLogo />
            <div className="hero-intro">
              <p className="eyebrow">Contato</p>
              <h1>{store.name}</h1>
              <p className="hero-text">Pagina exclusiva com mapa, telefone, WhatsApp e localizacao da loja.</p>
            </div>
          </div>

          <div className="toolbar">
            <nav className="nav-tabs" aria-label="Categorias">
              <button type="button" className="active" onClick={() => setView('catalog')}>
                VOLTAR AO CATALOGO
              </button>
            </nav>
          </div>
        </header>

        <main className="content">
          <ContactSection />
        </main>

        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-links">
              <button type="button" onClick={() => setView('catalog')}>
                CATALOGO
              </button>
            </div>

            <StoreLogo />

            <div className="footer-links footer-right">
              <a href={store.whatsapp} target="_blank" rel="noreferrer">
                WHATSAPP
              </a>
              <a href={store.mapsLink} target="_blank" rel="noreferrer">
                MAPA
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="page">
      <header className="hero-header">
        <div className="hero-top">
          <StoreLogo />
          <div className="hero-intro">
            <p className="eyebrow">Catalogo Atualizado</p>
            <h1>{store.name}</h1>
            <p className="hero-text">{store.tagline}</p>
          </div>
        </div>

        <div className="toolbar">
          <nav className="nav-tabs" aria-label="Categorias">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                className={category.value === activeCategory ? 'active' : ''}
                onClick={() =>
                  setActiveCategory((current) => (current === category.value ? null : category.value))
                }
              >
                {category.label}
              </button>
            ))}
            <button type="button" className="nav-link" onClick={() => setView('contact')}>
              CONTATO
            </button>
          </nav>

          <label className="searchbar">
            <span className="search-label">Buscar modelo</span>
            <input
              type="search"
              placeholder="Ex.: X12, Dudu, Amazon..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
        </div>
      </header>

      <main className="content" id="catalogo">
        {currentItem ? (
          <section className="carousel-shell">
            <div className="carousel-stage">
              <div className="carousel-media">
                <span className="media-badge">{currentItem.badge}</span>
                <SmartImage sources={getCoverCandidates(currentItem)} alt={currentItem.name} />
              </div>

              <div className="carousel-copy">
                <p className="eyebrow">Destaque do carrossel</p>
                <h2>{currentItem.name}</h2>
                <p className="item-summary">{currentItem.summary}</p>

                <div className="price-row">
                  <strong>{currentItem.price}</strong>
                  {currentItem.oldPrice ? <span>{currentItem.oldPrice}</span> : null}
                </div>

                <div className="spec-grid">
                  {currentItem.specs.map((spec) => (
                    <div key={spec} className="spec-chip">
                      {spec}
                    </div>
                  ))}
                </div>

                <div className="actions">
                  <button type="button" className="nav-btn" onClick={goPrev}>
                    Anterior
                  </button>
                  <button type="button" className="nav-btn primary" onClick={goNext}>
                    Proximo
                  </button>
                  <button type="button" className="nav-btn" onClick={() => setSelectedItem(currentItem)}>
                    Ver mais
                  </button>
                </div>

                <p className="source-note">Fonte usada: {currentItem.sourceLabel}</p>
              </div>
            </div>

            <div className="dots" role="tablist" aria-label="Slides">
              {filtered.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={index === currentIndex % filtered.length ? 'active' : ''}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Abrir ${item.name}`}
                />
              ))}
            </div>
          </section>
        ) : null}

        <section className="rail-section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Catalogo</p>
              <h3>Todos os itens da captura, sem repeticao</h3>
            </div>
            <span>{filtered.length} itens visiveis</span>
          </div>

          <div className="product-rail">
            {filtered.map((item) => (
              <ProductCard key={item.id} item={item} onOpen={setSelectedItem} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-links">
            <button type="button" onClick={() => setActiveCategory('scooters')}>
              SCOOTERS
            </button>
            <button type="button" onClick={() => setActiveCategory('accessories')}>
              ACESSORIOS
            </button>
          </div>

          <StoreLogo />

          <div className="footer-links footer-right">
            <button type="button" onClick={() => setView('contact')}>
              CONTATO
            </button>
            <a href={store.whatsapp} target="_blank" rel="noreferrer">
              WHATSAPP
            </a>
            <a href={store.mapsLink} target="_blank" rel="noreferrer">
              MAPA
            </a>
          </div>
        </div>
      </footer>

      {selectedItem ? <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} /> : null}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
