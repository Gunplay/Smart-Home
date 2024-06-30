import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from '../Page404';

type RouteType = {
	path: string;
	element: React.ReactNode;
};

type RouterProps = {
	routes: RouteType[];
};

const Router: FC<RouterProps> = ({ routes }) => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, index) => (
					<Route key={index} path={route.path} element={route.element} />
				))}
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
