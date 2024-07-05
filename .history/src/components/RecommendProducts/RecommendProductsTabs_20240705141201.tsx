import { SetStateAction, useState } from 'react';
import phoneX from '../img/phone.jpg';
import css from './RecommendProductsTabs.module.css';
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
      src: phoneX,
    },
    {
      number: 2,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description: 'Оптика Leica наступного покоління',
      src: phoneX,
    },
    {
      number: 3,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description: 'Оптика Leica наступного покоління',
      src: phoneX,
    },
    {
      number: 4,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description: 'Оптика Leica наступного покоління',
      src: phoneX,
    },
  ],
  [Tab.SMARTPHONES]: [
    {
      number: 1,
      title: 'Серія Xiaomi 20',
      paragraph: 'Камера - легенда',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum est voluptas sint, laudantium odit, nesciunt quasi, dolores culpa perferendis minus aspernatur. Dolores, molestiae unde quibusdam expedita doloribus repudiandae ut sit.,',
      src: phoneX,
    },
    {
      number: 2,
      title: 'Серія Xiaomi 20',
      paragraph: 'Камера - легенда',
      description: 'Оптика Leica наступного покоління',
      src: phoneX,
    },
    {
      number: 3,
      title: 'Серія Xiaomi 20',
      paragraph: 'Камера - легенда',
      description: 'Оптика Leica наступного покоління',
      src: phoneX,
    },
    {
      number: 4,
      title: 'Серія Xiaomi 20',
      paragraph: 'Камера - легенда',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum est voluptas sint, laudantium odit, nesciunt quasi, dolores culpa perferendis minus aspernatur. Dolores, molestiae unde quibusdam expedita doloribus repudiandae ut sit.,',
      src: phoneX,
    },
  ],
  [Tab.GADGETS]: [
    {
      number: 1,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description: 'Оптика Leica наступного покоління',
      src: phoneX,
    },
    {
      number: 2,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum est voluptas sint, laudantium odit, nesciunt quasi, dolores culpa perferendis minus aspernatur. Dolores, molestiae unde quibusdam expedita doloribus repudiandae ut sit.,',
      src: phoneX,
    },
    {
      number: 3,
      title: 'Серія Xiaomi 14',
      paragraph: 'Камера - легенда',
      description: '',
      src: phoneX,
    },
  ],
};

const RecommendProductsTabs = () => {
  const [activeTab, setActiveTab] = useState(Tab.FLAGMAN);

  const toggleTab = (tab: SetStateAction<number>) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="block-tabs">
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
        <div className={css.parent}>
          {products[Tab.FLAGMAN].map((product, index) => {
            return (
              <div className={css[`grid + ${product.number}`]} key={index}>
                <img src={product.src} alt={product.title} />
                <p>{product.title}</p>
                <p>{product.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={
          activeTab === Tab.SMARTPHONES ? css.activeContent : css.content
        }
      >
        <div className={css.parent}>
          {products[Tab.SMARTPHONES].map((product, index) => {
            return (
              <div className={css[`grid + ${product.number}`]} key={index}>
                <img src={product.src} alt={product.title} />
                <p>{product.title}</p>
                <p>{product.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={activeTab === Tab.GADGETS ? css.activeContent : css.content}
      >
        <div className={css.parent}>
          {products[Tab.GADGETS].map((product, index) => {
            return (
              <div className={css[`grid + ${product.number}`]} key={index}>
                <img src={product.src} alt={product.title} />
                <p>{product.title}</p>
                <p>{product.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecommendProductsTabs;