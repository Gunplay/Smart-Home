// import { useState } from 'react';

// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import Header from './components/Header';
import PageNotFound from './components/Page404';
import Slider from './components/Slider';

function App() {
	return (
		<>
			<div className='mr-[3.75rem] pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
				<Header />
				<Slider />
				<ProductsList />
				<PageNotFound />
			</div>
		</>
	);
}

export default App;
