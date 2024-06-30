import { FC } from 'react';

type Route = {
	path: string;
	component: React.ComponentType;
};

type RouterProps = {
	routers: Route[];
};

const Router: FC<RouterProps> = () => {
	return <div>Router</div>;
};
