import React, { useEffect, useState } from 'react';
import ApiService from '../api/api';
import { Ad } from '../types/adTypes';
// import Pagination from '../components/Pagination/Pagination';
import Pagination from '@mui/material/Pagination';
import CardAd from '../components/Card/Card';
import styles from './List.module.css';
import { Icon } from '@mui/material';
import { Link } from 'react-router-dom';

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
		<>
			<Link to="/form">
				<Icon color="primary">add_circle</Icon>
			</Link>
		<div className={styles.cards}>
			{currentAds.map(ad => (
				<CardAd key={ad.id} data={ad}/>
			))}
		</div>
			<Pagination count={Math.ceil(currentAds.length / AD_PER_PAGE) + 1} color="secondary" onChange={(e, number) => paginate(number)}></Pagination>
		</>
	);
};

export default List;