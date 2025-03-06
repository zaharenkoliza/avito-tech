
import { Button } from "@mui/material";
import { StepProps } from "../../types/StepProps";
import EstateStep from "./EstateStep";

const StepSecond: React.FC<StepProps> = ({ ad, setAd, func, load }) => {
		return (
		<>
			{ad.type === 'Недвижимость' && (
				<EstateStep ad={ad} setAd={setAd}/>
			)}

			{ad.type === 'Авто' && (
				<>
				<div>
					<label htmlFor="brand">Марка автомобиля:</label>
					<input
					id="brand"
					type="text"
					value={ad.brand}
					onChange={(e) =>
						setAd((prevAd) => ({
							...prevAd,
							brand: e.target.value,
						}))}
					required
					/>
				</div>
				<div>
					<label htmlFor="model">Модель автомобиля:</label>
					<input
					id="model"
					type="text"
					value={ad.model}
					onChange={(e) =>
						setAd((prevAd) => ({
							...prevAd,
							model: e.target.value,
						}))}
					required
					/>
				</div>
				<div>
					<label htmlFor="year">Год выпуска:</label>
					<input
					id="year"
					type="number"
					value={ad.year}
					onChange={(e) =>
						setAd((prevAd) => ({
							...prevAd,
							year: Number(e.target.value),
						}))}
					required
					/>
				</div>
				<div>
					<label htmlFor="mileage">Пробег (км):</label>
					<input
					id="mileage"
					type="number"
					value={ad.mileage}
					onChange={(e) =>
						setAd((prevAd) => ({
							...prevAd,
							mileage: Number(e.target.value),
						}))}
					required
					/>
				</div>
				</>
			)}

			<Button variant="outlined" onClick={func}>
				Назад
			</Button>

			<Button variant="outlined" type="submit" disabled={load}>
				{load ? 'Отправка...' : 'Отправить'}
			</Button>
		</>
	);
};

export default StepSecond;