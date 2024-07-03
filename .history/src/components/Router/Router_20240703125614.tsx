import { FC } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../../pages';
import Register from '../Form/Register';
import SignIn from '../Form/SignIn';

type Route = {
	path: string;
	component: React.ComponentType;
};

type RouterProps = {
	routes: Route[];
};

export const Router: FC<RouterProps> = () =>
	createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/register',
			element: <Register />,
		},
		{
			path: '/sign-in',
			element: <SignIn />,
		},
	]);

// const Router: FC<RouterProps> = ({ routes }) => {
// 	console.log('routes', routes);
// 	const path = window.location.pathname;
// 	console.log('path', path);
// 	const Component = routes.find(
// 		(route: { path: string }) => route.path === path
// 	)?.component;

// 	return Component ? (
// 		<Component />
// 	) : (
// 		<h1>
// 			<PageNotFound />
// 		</h1>
// 	);
// };

export default Router;
