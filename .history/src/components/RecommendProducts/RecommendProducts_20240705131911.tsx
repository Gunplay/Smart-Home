//  Possible get from BackEnd

import RecommendProductsTabs from './RecommendProductsTabs';

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
      {/* <ul>
        {categoryProducts.map((category, index) => (
          <li key={index}>
            <a href="#">{category}</a>
          </li>
        ))}
      </ul> */}
      <RecommendProductsTabs />

      <div></div>
    </div>
  );
};

export default RecommendProducts;
