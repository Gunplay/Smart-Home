// import Router from './components/Router/Router';
import { Route, Routes } from 'react-router-dom';
import { Home, Register, SignIn } from './pages/index';
const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/register' element={<Register />} />
			<Route path='/sign-in' element={<SignIn />} />
		</Routes>
	);
	// return (
	// 	<Routes
	// 		routes={[
	// 			{ path: '/', component: Home },
	// 			{ path: '/sign-in', component: SignIn },
	// 			{ path: '/register', component: Register },
	// 		]}
	// 	/>
	// );
};

export default App;
