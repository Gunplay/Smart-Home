import AboutUs from './components/AboutUs';
import Register from './components/Form/Register';
import SignIn from './components/Form/SignIn';
import Router from './components/Router/Router';
import Home from './pages/Home';

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
