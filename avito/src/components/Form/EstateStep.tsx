
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { StepProps } from "../../types/StepProps";

const EstateStep: React.FC<StepProps> = ({ ad, setAd }) => {
	return (
		<>
			<FormControl variant="filled">
				<InputLabel id="propertyType-label">Подтип недвижимости</InputLabel>
				<Select
					labelId="propertyType-label"
					id="propertyType"
					value={ad.propertyType}
					label="Подтип недвижимости"
					onChange={(e) =>
						setAd((prevAd) => ({
							...prevAd,
							propertyType: e.target.value,
						}))}
					required
					>
					<MenuItem value="room">Квартира</MenuItem>
					<MenuItem value="house">Дом</MenuItem>
					<MenuItem value="cottage">Коттедж</MenuItem>
				</Select>
			</FormControl>
			<TextField
				id="area" 
				onChange={(e) =>
					setAd((prevAd) => ({
						...prevAd,
						area: Number(e.target.value),
					}))} 
				label="Площадь (кв. м)" 
				value={ad.area}
				variant="filled"
				type="number"
				required
			/>
			<TextField
				id="rooms" 
				onChange={(e) =>
					setAd((prevAd) => ({
						...prevAd,
						rooms: Number(e.target.value),
					}))} 
				label="Количество комнат" 
				value={ad.rooms}
				variant="filled"
				type="number"
				required
			/>
			<TextField
				id="price" 
				onChange={(e) =>
					setAd((prevAd) => ({
						...prevAd,
						price: Number(e.target.value),
					}))} 
				label="Цена" 
				value={ad.price}
				variant="filled"
				type="number"
				required
			/>
		</>
	);
};

export default EstateStep;