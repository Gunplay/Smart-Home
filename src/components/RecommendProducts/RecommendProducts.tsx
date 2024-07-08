//  Possible get from BackEnd
// import css from './ReccomendProductsTabs.module.css';

import RecommendProductsTabs from './ReccomendProductsTabs';

// 1
// const categoryProducts = [
//   'Флагманські продукти',
//   'Трендові смартфони',
//   'Трендові гаджети',
// ];

const RecommendProducts = () => {
  return (
    <div>
      <h2>Рекомендовані продукти</h2>
      <RecommendProductsTabs />
    </div>
  );
};

export default RecommendProducts;
