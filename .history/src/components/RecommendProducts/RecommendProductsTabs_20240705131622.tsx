import css from './RecommendProductsTabs.module.css';
import { SetStateAction, useState } from 'react';

const Tab = {
  FLAGMAN: 1,
  SMARTPHONES: 2,
  GADGETS: 3,
};

const products = {
  [Tab.FLAGMAN]: [
    {
      number: 1,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description: 'Оптика Leica наступного покоління',
      src: '../img/phone.jpg',
    },
    {
      number: 2,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description: 'Оптика Leica наступного покоління',
      src: '../img/phone.jpg',
    },
    {
      number: 3,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description: 'Оптика Leica наступного покоління',
      src: '../img/phone.jpg',
    },
    {
      number: 4,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description: 'Оптика Leica наступного покоління',
      src: '../img/phone.jpg',
    },
  ],
  [Tab.SMARTPHONES]: [
    {
      number: 1,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum est voluptas sint, laudantium odit, nesciunt quasi, dolores culpa perferendis minus aspernatur. Dolores, molestiae unde quibusdam expedita doloribus repudiandae ut sit.,',
      src: '../img/phone.jpg',
    },
    {
      number: 2,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description: 'Оптика Leica наступного покоління',
      src: '../img/phone.jpg',
    },
    {
      number: 3,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description: 'Оптика Leica наступного покоління',
      src: '../img/phone.jpg',
    },
    {
      number: 4,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum est voluptas sint, laudantium odit, nesciunt quasi, dolores culpa perferendis minus aspernatur. Dolores, molestiae unde quibusdam expedita doloribus repudiandae ut sit.,',
      src: '../img/phone.jpg',
    },
  ],
  [Tab.GADGETS]: [
    {
      number: 1,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description: 'Оптика Leica наступного покоління',
      src: '../img/phone.jpg',
    },
    {
      number: 2,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum est voluptas sint, laudantium odit, nesciunt quasi, dolores culpa perferendis minus aspernatur. Dolores, molestiae unde quibusdam expedita doloribus repudiandae ut sit.,',
      src: '../img/phone.jpg',
    },
    {
      number: 3,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description: '',
      src: '../img/phone.jpg',
    },
  ],
};

const RecommendProductsTabs = () => {
  const [activeTab, setActiveTab] = useState(Tab.FLAGMAN);

  const toggleTab = (tab: SetStateAction<number>) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <div
          className={activeTab === Tab.FLAGMAN ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(Tab.FLAGMAN)}
        >
          Флагманські продукти
        </div>
        <div
          className={
            activeTab === Tab.SMARTPHONES ? 'tabs active-tabs' : 'tabs'
          }
          onClick={() => toggleTab(Tab.SMARTPHONES)}
        >
          Трендові смартфони
        </div>
        <div
          className={activeTab === Tab.GADGETS ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(Tab.GADGETS)}
        >
          Трендові гаджети
        </div>
      </div>
      <div
        className={activeTab === Tab.FLAGMAN ? css.activeContent : css.content}
      >
        <div className="parent">
          {products[Tab.FLAGMAN].map((product, index) => (
            <div className={`grid` + `${product.number}`} key={index}>
              <img src={product.src} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          activeTab === Tab.SMARTPHONES ? css.activeContent : css.content
        }
      >
        <ul>
          {products[Tab.SMARTPHONES].map((product, index) => (
            <li key={index}>
              <img src={product.src} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={activeTab === Tab.GADGETS ? css.activeContent : css.content}
      >
        <ul>
          {products[Tab.GADGETS].map((product, index) => (
            <li key={index}>
              <img src={product.src} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecommendProductsTabs;
