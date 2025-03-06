import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from '../pages/Form';
import List from '../pages/List';
import AdPage from '../pages/AdPage';

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<List />} />
			<Route path="/form" element={<Form />} />
			<Route path="/form/:id" element={<Form />} />
			<Route path="/list" element={<List />} />
			<Route path="/item/:id" element={<AdPage />} />
			{/* <Route path="/item" element={<Request />} /> */}
		</Routes>
	);
};

export default AppRoutes;
