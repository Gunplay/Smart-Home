import { FC } from 'react';
import PageNotFound from '../Page404';
import { createBrowserRouter } from 'react-router-dom';

// type Route = {
// 	path: string;
// 	component: React.ComponentType;
// };

// type RouterProps = {
// 	routes: Route[];
// };

const Router = () => createBrowserRouter([{}]);

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
