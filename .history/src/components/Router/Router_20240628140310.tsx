import { FC } from 'react';

type Route = {
	path: string;
	component: React.ComponentType;
};

type RouterProps = {
	routers: Route[];
};

const Router: FC<RouterProps> = ({ routes }) => {
	const path = window.location.pathname;
	const Component = routes.find(route => route.path === path?.component);

	return Component ? <Component /> : <h1>Oops, This page </h1>;
};

export default Router;
