import { StepProps } from "../../types/StepProps";

const StepFirst: React.FC<StepProps> = ({ ad, setAd, func }) => {
	return (
		<>
			<div>
				<label htmlFor="name">Название объявления:</label>
				<input
					id="name"
					type="text"
					value={ad.name}
					onChange={(e) =>
						setAd((prevAd) => ({
							...prevAd,
							name: e.target.value,
						}))}
					required
				/>
			</div>
			<div>
				<label htmlFor="description">Описание объявления:</label>
				<textarea
					id="description"
					value={ad.description}
					onChange={(e) =>
						setAd((prevAd) => ({
							...prevAd,
							description: e.target.value,
						}))}
					required
				/>
			</div>
			<div>
				<label htmlFor="location">Локация:</label>
				<input
					id="location"
					type="text"
					value={ad.location}
					onChange={(e) =>
						setAd((prevAd) => ({
							...prevAd,
							location: e.target.value,
						}))}
					required
				/>
			</div>
			<div>
				<label htmlFor="image">Фото:</label>
				<input
					id="image"
					type="text"
					placeholder="Введите ссылку на изображение"
					value={ad.image}
					onChange={(e) =>
						setAd((prevAd) => ({
							...prevAd,
							image: e.target.value,
						}))}
					required
				/>
			</div>
			<div>
				<label htmlFor="type">Тип объявления:</label>
				<select
					id="type"
					value={ad.type}
					onChange={(e) =>
						setAd((prevAd) => ({
							...prevAd,
							type: e.target.value,
						}))}
					required
				>
					<option value="">Выберите тип</option>
					<option value="Недвижимость">Недвижимость</option>
					<option value="Авто">Авто</option>
					<option value="Услуги">Услуги</option>
				</select>
			</div>

			{ad.type && <button onClick={func}>
				Далее
			</button>}
			
		</>
	);
};

export default StepFirst;