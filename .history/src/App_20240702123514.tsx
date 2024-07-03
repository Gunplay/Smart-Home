// import Router from './components/Router/Router';
// import { Home, Register, SignIn } from './pages/index';

// function App() {
// 	return (
// 		<Router
// 			routes={[
// 				{ path: '/', component: Home },
// 				{ path: '/sign-in', component: SignIn },
// 				{ path: '/register', component: Register },
// 			]}
// 		/>
// 	);
// }

// export default App;
import Router from './components/Router/Router';
import { Home, Register, SignIn } from './pages/index';

function App() {
	return (
		<Router
			routes={[
				{ path: '/', element: <Home /> }, // Используйте element вместо component
				{ path: '/sign-in', element: <SignIn /> },
				{ path: '/register', element: <Register /> },
			]}
		/>
	);
}

export default App;
