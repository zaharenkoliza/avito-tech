import { Ad } from '../../types/adTypes';
// import styles from './Card.module.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

interface CardProps {
	data: Ad;
}


const CardAd: React.FC<CardProps> = ({ data }) => {

	const navigate = useNavigate();

	return (
		<Card>
			<CardMedia
				sx={{ height: 140 }}
				image={data.image}
				title="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
				{data.name}
				</Typography>
				<Typography variant="body2" sx={{ color: 'text.secondary' }}>
				{data.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" onClick={() => navigate(`/item/${data.id}`)}>Просмотреть объявление</Button>
			</CardActions>
		</Card>

		// <a className={styles.card} href={`/item/${data.id}`}>
		// 	<img src={data.name} alt={data.name} className="card-image" />
		// 	<h2 className="card-title">{data.name}</h2>
		// 	<p className="card-description">{data.name}</p>
		// 	<p>{data.description}</p>
		// 	<p>Location: {data.location}</p>
		// 	<p>Type: {data.type}</p>

		// 	{ 'propertyType' in data && (
		// 		<>
		// 			<p>Property Type: {data.propertyType}</p>
		// 			<p>Area: {data.area} м²</p>
		// 			<p>Rooms: {data.rooms}</p>
		// 			<p>Price: {data.price} ₽</p>
		// 		</>
		// 	)}

		// 	{/* Проверяем, является ли объект автомобилем */}
		// 	{ 'brand' in data && (
		// 		<>
		// 			<p>Brand: {data.brand}</p>
		// 			<p>Model: {data.model}</p>
		// 			<p>Year: {data.year}</p>
		// 			<p>Mileage: {data.mileage} км</p>
		// 		</>
		// 	)}

		// 	{/* Проверяем, является ли объект услугой */}
		// 	{ 'serviceType' in data && (
		// 		<>
		// 			<p>Service Type: {data.serviceType}</p>
		// 			<p>Experience: {data.experience} years</p>
		// 			<p>Cost: {data.cost} ₽</p>
		// 			<p>Work Schedule: {data.workSchedule}</p>
		// 		</>
		// 	)}
		//</a>
	);
};

export default CardAd;