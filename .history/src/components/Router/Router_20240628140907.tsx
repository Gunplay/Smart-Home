import { FC } from 'react';

type Route = {
	path: string;
	component: React.ComponentType;
};

type RouterProps = {
	routes: Route[];
};

const Router: FC<RouterProps> = ({ routes }) => {
	console.log('routes', routes);
	const path = window.location.pathname;
	console.log('path', path);
	const Component = routes.find(
		(route: { path: string }) => route.path === path
	)?.component;

	return Component ? (
		<Component />
	) : (
		<h1>Oops, This page does not exist in this way </h1>
	);
};

export default Router;
