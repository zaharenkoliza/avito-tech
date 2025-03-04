import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Request from '../pages/Request';
import List from '../pages/List';
import AdPage from '../pages/AdPage';

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/form" element={<Request />} />
			<Route path="/form/:id" element={<Request />} />
			<Route path="/list" element={<List />} />
			<Route path="/item/:id" element={<AdPage />} />
			{/* <Route path="/item" element={<Request />} /> */}
		</Routes>
	);
};

export default AppRoutes;
