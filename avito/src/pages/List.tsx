import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import ApiService from '../api/api';
import { Ad } from '../types/adTypes';
import Pagination from '../components/Pagination/Pagination';

const List: React.FC = () => {
	const [ads, setAds] = useState<Ad[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const [currentPage, setCurrentPage] = useState(1);
	const AD_PER_PAGE = 3;

	const lastAdIndex = currentPage * AD_PER_PAGE;
	const firstAdIndex = lastAdIndex - AD_PER_PAGE;
	const currentAds = ads.slice(firstAdIndex, lastAdIndex);

	const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

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
		{currentAds.map(ad => (
			<Card key={ad.id} data={ad}/>
		))}
		<Pagination adPerPage={AD_PER_PAGE} totalAds={ads.length} paginate={paginate}></Pagination>
	</div>
	);
};

export default List;