
import { StepProps } from "../../types/StepProps";

const StepSecond: React.FC<StepProps> = ({ ad, setAd, func, load }) => {
		return (
		<>
			{ad.type === 'Недвижимость' && (
				<>
				<div>
					<label htmlFor="propertyType">Подтип недвижимости:</label>
					<input
					id="propertyType"
					type="text"
					value={ad.propertyType}
					onChange={(e) =>
						setAd((prevAd) => ({
							...prevAd,
							propertyType: e.target.value,
						}))}
					required
					/>
				</div>
				<div>
					<label htmlFor="area">Площадь (кв. м):</label>
					<input
					id="area"
					type="number"
					value={ad.area}
					onChange={(e) =>
						setAd((prevAd) => ({
							...prevAd,
							area: Number(e.target.value),
						}))}
					required
					/>
				</div>
				<div>
					<label htmlFor="rooms">Количество комнат:</label>
					<input
					id="rooms"
					type="number"
					value={ad.rooms}
					onChange={(e) =>
						setAd((prevAd) => ({
							...prevAd,
							rooms: Number(e.target.value),
						}))}
					required
					/>
				</div>
				<div>
					<label htmlFor="price">Цена:</label>
					<input
					id="price"
					type="number"
					value={ad.price}
					onChange={(e) =>
						setAd((prevAd) => ({
							...prevAd,
							price: Number(e.target.value),
						}))}
					required
					/>
				</div>
				</>
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

			<button onClick={func}>
				Назад
			</button>

			<button type="submit" disabled={load}>
					{load ? 'Отправка...' : 'Отправить'}
			</button>
		</>
	);
};

export default StepSecond;