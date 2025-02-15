import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import ApiService from '../api/api';
import { Ad } from '../types/adTypes';

const List: React.FC = () => {
	const [ads, setAds] = useState<Ad[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchAds = async () => {
			try {
				const response = await ApiService.getAds();
				setAds(response.data);
			} catch (error) {
				setError('Ошибка при загрузке объявлений');
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchAds();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (ads.length === 0) {
		return <div>No ads found.</div>;
	}

	return (
	<div>
		{ads.map(ad => (
			<Card key={ad.id} data={ad}/>
		))}
	</div>
	);
};

export default List;