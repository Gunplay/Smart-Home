import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from '../Page404';

type RouteConfig = {
	path: string;
	element: JSX.Element; // Вместо component используйте element для указания JSX.Element
};

type RouterProps = {
	routes: RouteConfig[];
};

const Router: FC<RouterProps> = ({ routes }) => {
	return (
		<Routes>
			{routes.map(({ path, element }) => (
				<Route key={path} path={path} element={element} />
			))}
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	);
};

export default Router;

// import { FC } from 'react';
// import PageNotFound from '../Page404';

// type Route = {
// 	path: string;
// 	component: React.ComponentType;
// };

// type RouterProps = {
// 	routes: Route[];
// };

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

// export default Router;
