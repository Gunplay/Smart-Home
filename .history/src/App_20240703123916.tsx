// import Router from './components/Router/Router';
import { Route, Routes, createBrowserRouter } from 'react-router-dom';
import { Home, Register, SignIn } from './pages/index';
const App = () => createBrowserRouter(
	[

		{ path: '/', element: <Home/> },
		{ path: '/sign-in', element: SignIn },
		{ path: '/register', element: Register },
	]
)

		
};

export default App;
