import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { StepProps } from "../../types/StepProps";
import TextField from '@mui/material/TextField';

const StepFirst: React.FC<StepProps> = ({ ad, setAd, func }) => {
	return (
		<>
			<TextField 
				id="name" 
				onChange={(e) =>
					setAd((prevAd) => ({
						...prevAd,
						name: e.target.value,
					}))} 
				label="Название объявления" 
				value={ad.name} 
				variant="filled" 
				required
			/>
			<TextField 
				id="description" 
				onChange={(e) =>
					setAd((prevAd) => ({
						...prevAd,
						description: e.target.value,
					}))} 
				label="Описание объявления" 
				value={ad.description} 
				rows={4}
				variant="filled" 
				required
				multiline
			/>
			<TextField 
				id="location" 
				onChange={(e) =>
					setAd((prevAd) => ({
						...prevAd,
						location: e.target.value,
					}))} 
				label="Локация" 
				value={ad.location}
				variant="filled" 
				required
			/>
			<TextField 
				id="image" 
				onChange={(e) =>
					setAd((prevAd) => ({
						...prevAd,
						image: e.target.value,
					}))} 
				label="Фото" 
				value={ad.image}
				variant="filled"
				placeholder="Введите ссылку на изображение"
			/>

			<FormControl variant="filled">
				<InputLabel id="type-label">Тип объявления</InputLabel>
				<Select
					labelId="type-label"
					id="type"
					value={ad.type}
					label="Выберите тип"
					onChange={(e) =>
						setAd((prevAd) => ({
							...prevAd,
							type: e.target.value,
						}))}
					required
					>
					<MenuItem value="Недвижимость">Недвижимость</MenuItem>
					<MenuItem value="Авто">Авто</MenuItem>
					<MenuItem value="Услуги">Услуги</MenuItem>
				</Select>
			</FormControl>

			

			{ad.type && ad.name && ad.description && ad.location && <Button variant="outlined" onClick={func}>
				Далее
			</Button>}
			
		</>
	);
};

export default StepFirst;