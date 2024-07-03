// import Router from './components/Router/Router';
import { Route, Routes, createBrowserRouter } from 'react-router-dom';
import { Home, Register, SignIn } from './pages/index';
const App = () => createBrowserRouter(
	[

		{ path: '/', component: Home },
		{ path: '/sign-in', component: SignIn },
		{ path: '/register', component: Register },
	]
)

		
};

export default App;
