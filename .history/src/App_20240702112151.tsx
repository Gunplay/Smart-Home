import Router from './components/Router/Router';
import { Home, Register, SignIn } from './pages/index';

function App() {
	return (
		<>
			<Router
				routes={[
					{ path: '/home', component: Home },
					// { path: '/about', component: AboutUs },
					{ path: '/sign-in', component: SignIn },
					{ path: '/register', component: Register },
				]}
			/>
		</>
	);
}

export default App;
