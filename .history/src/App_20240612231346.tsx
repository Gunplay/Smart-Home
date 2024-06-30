// import { useState } from 'react';

// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import Header from './components/Header';
import PageNotFound from './components/Page404';

function App() {
	return (
		<>
			<div className='mr-[3.75rem] pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
				<Header />
				<PageNotFound />
			</div>
			{/* <ProductsList /> */}
		</>
	);
}

export default App;
