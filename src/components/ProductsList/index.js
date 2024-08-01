import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import buttonNextProducts from '../../assets/ButtonsSmartHome/buttonNextProducts.svg';
// import onePlus from '../../assets/productsCardPicture/GooglePixel9Pro16128GBObsidian0.jpg';
import { FetchProducts } from '../../redux/products/asyncActions.js';
// import ProductCard from './Product/index.js';
import styles from './ProductsList.module.scss';

// interface Product {
//   id: number;
//   name: string;
//   images: string[];
//   oldPrice: string;
//   newPrice: string;
//   reviews: number;
//   category: string;
// }

// interface ProductCategory {
//   category: string;
//   items: Product[];
// }

// const products: ProductCategory[] = [
//   {
//     category: 'Супер знижки',
//     items: [
//       {
//         id: 0,
//         name: 'Розумний дверний замок Aqara Smart D...',
//         images: [onePlus],
//         oldPrice: '11 100 ₴',
//         newPrice: '9 990 ₴',
//         reviews: 115,
//         category: 'Супер знижки',
//       },
//       {
//         id: 1,
//         name: 'Розумний дверний замок Aqara Smart D...',
//         images: [onePlus],
//         oldPrice: '11 100 ₴',
//         newPrice: '9 990 ₴',
//         reviews: 115,
//         category: 'Супер знижки',
//       },
//       {
//         id: 2,
//         name: 'Розумний дверний замок Aqara Smart D...',
//         images: [onePlus],
//         oldPrice: '11 100 ₴',
//         newPrice: '9 990 ₴',
//         reviews: 115,
//         category: 'Супер знижки',
//       },
//       {
//         id: 3,
//         name: 'Розумний дверний замок Aqara Smart D...',
//         images: [onePlus],
//         oldPrice: '11 100 ₴',
//         newPrice: '9 990 ₴',
//         reviews: 115,
//         category: 'Супер знижки',
//       },
//       {
//         id: 4,
//         name: 'Розумний дверний замок Aqara Smart D...',
//         images: [onePlus],
//         oldPrice: '11 100 ₴',
//         newPrice: '9 990 ₴',
//         reviews: 115,
//         category: 'Супер знижки',
//       },
//     ],
//   },
//   {
//     category: 'Новинки року',
//     items: [
//       {
//         id: 0,
//         name: 'Новий смартфон Samsung Galaxy S23...',
//         images: [onePlus],
//         oldPrice: '24 990 ₴',
//         newPrice: '22 490 ₴',
//         reviews: 567,
//         category: 'Новинки року',
//       },
//       {
//         id: 1,
//         name: 'Розумний дверний замок Aqara Smart D...',
//         images: [onePlus],
//         oldPrice: '11 100 ₴',
//         newPrice: '9 990 ₴',
//         reviews: 115,
//         category: 'Новинки року',
//       },
//       {
//         id: 2,
//         name: 'Розумний дверний замок Aqara Smart D...',
//         images: [onePlus],
//         oldPrice: '11 100 ₴',
//         newPrice: '9 990 ₴',
//         reviews: 115,
//         category: 'Новинки року',
//       },
//       {
//         id: 3,
//         name: 'Розумний дверний замок Aqara Smart D...',
//         images: [onePlus],
//         oldPrice: '11 100 ₴',
//         newPrice: '9 990 ₴',
//         reviews: 115,
//         category: 'Новинки року',
//       },
//       {
//         id: 4,
//         name: 'Розумний дверний замок Aqara Smart D...',
//         images: [onePlus],
//         oldPrice: '11 100 ₴',
//         newPrice: '9 990 ₴',
//         reviews: 115,
//         category: 'Новинки року',
//       },
//     ],
//   },
//   {
//     category: 'Найкраще для вас',
//     items: [
//       {
//         id: 0,
//         name: 'Новий смартфон Samsung Galaxy S23...',
//         images: [onePlus],
//         oldPrice: '24 990 ₴',
//         newPrice: '22 490 ₴',
//         reviews: 567,
//         category: 'Найкраще для вас',
//       },
//       {
//         id: 1,
//         name: 'Розумний дверний замок Aqara Smart D...',
//         images: [onePlus],
//         oldPrice: '11 100 ₴',
//         newPrice: '9 990 ₴',
//         reviews: 115,
//         category: 'Найкраще для вас',
//       },
//       {
//         id: 2,
//         name: 'Новий смартфон Samsung Galaxy S23...',
//         images: [onePlus],
//         oldPrice: '24 990 ₴',
//         newPrice: '22 490 ₴',
//         reviews: 567,
//         category: 'Найкраще для вас',
//       },
//       {
//         id: 3,
//         name: 'Новий смартфон Samsung Galaxy S23...',
//         images: [onePlus],
//         oldPrice: '24 990 ₴',
//         newPrice: '22 490 ₴',
//         reviews: 567,
//         category: 'Найкраще для вас',
//       },
//       {
//         id: 4,
//         name: 'Новий смартфон Samsung Galaxy S23...',
//         images: [onePlus],
//         oldPrice: '24 990 ₴',
//         newPrice: '22 490 ₴',
//         reviews: 567,
//         category: 'Найкраще для вас',
//       },
//     ],
//   },
// ];

const ProductsList = () => {
  const dispatch = useDispatch();
  const prodData = useSelector(state => state.products);
  console.log('products', prodData);
  useEffect(() => {
    dispatch(FetchProducts());
  }, [dispatch]);
  return (
    <div className={styles.productsListWrapper}>
      {/* {products.map(({ category, items }) => (
        <div key={category} className={styles.categorySection}>
          <div className={styles.wrapperHeaderProducts}>
            <h2 className={styles.categoryTitle}>{category}</h2>

            <img
              src={buttonNextProducts}
              className={styles.buttonNextProducts}
              alt="Next"
            />
          </div>
          <div className={styles.productsContainer}>
            {items.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default ProductsList;
