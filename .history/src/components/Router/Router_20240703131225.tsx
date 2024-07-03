import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Home } from '../../pages';
import Register from '../Form/Register';
import SignIn from '../Form/SignIn';
import Page404 from '../Page404';

const routes: RouteObject[] = [
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
	{
		path: '*', // This will match any route not matched by the above routes
		element: <Page404 />,
	},
];

export const router = createBrowserRouter(routes);

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
