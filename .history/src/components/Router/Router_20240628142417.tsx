import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from '../Page404';

type RouteType = {
	path: string;
	component: React.ComponentType;
};

type RouterProps = {
	routes: RouteType[];
};

const Router: FC<RouterProps> = ({ routes }) => {
	return (
		<BrowserRouter>
			<Switch>
				{routes.map((route, index) => (
					<Route
						key={index}
						exact
						path={route.path}
						component={route.component}
					/>
				))}
				<Route component={PageNotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
