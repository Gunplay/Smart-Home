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

	return <div>Router</div>;
};

export default Router;
