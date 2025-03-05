import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ApiService from '../api/api';
import { Ad } from '../types/adTypes';
import MultiStepForm from '../components/Form/MultiStepForm';

const emptyAd: Ad = {
	id: undefined,
	name: '',
	description: '',
	location: '',
	type: '',
	image: undefined
};

const Form: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const adId = id ? Number(id) : null;

	const [ad, setAd] = useState<Ad>(emptyAd);

	const navigate = useNavigate();
	
	const [error, setError] = useState<string | null>(null);


	// const validateForm = () => {
	// 	// Проверка всех обязательных полей в зависимости от типа объявления
	// 	if (!ad.name || !ad.description || !ad.location || !ad.type) {
	// 	  setError('Все поля должны быть заполнены');
	// 	  return false;
	// 	}
	
	// 	// Проверка для недвижимости
	// 	if (ad.type === 'Недвижимость') {
	// 		if (!ad.propertyType || !ad.area || !ad.rooms || !ad.price) {
	// 		setError('Для недвижимости все поля должны быть заполнены');
	// 		return false;
	// 	}
	// 	}
	
	// 	// Проверка для автомобилей
	// 	if (ad.type === 'Авто') {
	// 	  if (!ad.brand || !ad.model || !ad.year || !ad.mileage) {
	// 		setError('Для автомобиля все поля должны быть заполнены');
	// 		return false;
	// 	  }
	// 	}
	
	// 	// Проверка для услуг
	// 	if (ad.type === 'Услуги') {
	// 	if (!ad.price) {
	// 		setError('Для услуг должна быть указана цена');
	// 		return false;
	// 	}
	// 	}
	
	// 	return true;
	// };
	
	useEffect(() => {
		if (id) {
			// Если есть id, делаем GET запрос для получения данных объявления
			const fetchAd = async () => {
				try {
					const result = await ApiService.getAd(Number(id)); // Используем наш ApiService
					setAd(result.data);
				} catch (err) {
					navigate(`/item`);
					setError('Ошибка при загрузке объявления');
					console.error(err);
				}
			};
			fetchAd();
		}
	}, [id, navigate]);

	return (
		<div>
			<h1>{adId ? 'Изменить объявление' : 'Создать объявление'}</h1>
			<MultiStepForm ad={ad} setAd={setAd} ></MultiStepForm>

			{error && <div style={{ color: 'red' }}>Ошибка: {error}</div>}
		</div>
	);
};

export default Form;