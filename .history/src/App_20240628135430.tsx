import Router from './components/Router/Router';
import { AboutUs, Home, Register, SignIn } from './pages/index';
function App() {
	return (
		<>
			<Router
				routers={[
					{ path: '/', component: Home },
					{ path: '/about', component: AboutUs },
					{ path: '/sign-in', component: SignIn },
					{ path: '/register', component: Register },
				]}
			/>
		</>
	);
}

export default App;
