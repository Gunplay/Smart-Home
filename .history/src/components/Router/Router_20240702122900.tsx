import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from '../Page404';

type RouteConfig = {
	path: string;
	component: React.ComponentType;
};

type RouterProps = {
	routes: RouteConfig[];
};

const Router: FC<RouterProps> = ({ routes }) => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(({ path, component: Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
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
