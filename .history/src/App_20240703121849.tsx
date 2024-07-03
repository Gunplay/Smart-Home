// import Router from './components/Router/Router';
import { Home, Register, SignIn } from './pages/index';

const App = () => {
	return (
		<Router
			routes={[
				{ path: '/', component: Home },
				{ path: '/sign-in', component: SignIn },
				{ path: '/register', component: Register },
			]}
		/>
	);
};

export default App;
