import { useState } from 'react';
import styles from './App.module.scss';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className={styles.logoContainer}>
				{' '}
				{/* Use class from SCSS */}
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className={styles.logo} alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1 className={styles.heading}>Vite + React</h1>{' '}
			{/* Use class from SCSS */}
			<div className={styles.card}>
				{' '}
				{/* Use class from SCSS */}
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className={styles.readTheDocs}>
				{' '}
				{/* Use class from SCSS */}
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
