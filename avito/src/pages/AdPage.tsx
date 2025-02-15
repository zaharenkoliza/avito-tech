import React, { useEffect, useState } from 'react';
import { Ad } from '../types/adTypes';
import AdItem from '../components/Ad/AdItem';
import ApiService from '../api/api';
import { useParams } from 'react-router-dom';

const AdPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [ad, setAd] = useState<Ad>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchAds = async () => {
			try {
				const response = await ApiService.getAd(Number(id));
				setAd(response.data);
			} catch (error) {
				setError('Ошибка при загрузке объявлений');
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchAds();
	}, [id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!ad) {
		return <div>No ad found.</div>;
	}

	return (
		<div>
			<AdItem data={ad}/>
		</div>
	);
};

export default AdPage;