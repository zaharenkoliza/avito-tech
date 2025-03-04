import { useState } from "react";
import StepFirst from "./StepFirst";
import StepSecond from "./StepSecond";
import { Ad } from "../../types/adTypes";
import ApiService from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";

type MultiStepFormProp = {
	ad: Ad;
	setAd: React.Dispatch<React.SetStateAction<Ad>>;
}

const MultiStepForm: React.FC<MultiStepFormProp> = ({ ad, setAd }) => {
	const [currentStep, setCurrentStep] = useState<number>(1);

	const nextStep = () => {
		setCurrentStep((prevStep) => prevStep + 1);
	};

	const prevStep = () => {
		setCurrentStep((prevStep) => prevStep - 1);
	};

	const renderStep = () => {
		switch (currentStep) {
			case 1:
				return <StepFirst ad={ad} setAd={setAd} func={nextStep} />;
			case 2:
				return <StepSecond ad={ad} setAd={setAd} func={prevStep} load={loading} />;
			default:
				return <StepFirst ad={ad} setAd={setAd} func={nextStep} />;
		}
	};

	const { id } = useParams<{ id: string }>();
	const adId = id ? Number(id) : null;
	const [loading, setLoading] = useState<boolean>(false);

	const navigate = useNavigate();

	// const [response, setResponse] = useState(null);
	
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setLoading(true);
		setError(null);

		// validateForm();

		try {
			let result;
			if (adId !== null) {
				// Если id есть, то отправляем PUT запрос
				result = await ApiService.updateAd(Number(adId), ad);  // Используем updateAd из ApiService
			} else {
				// Если id нет, то создаем новый POST запрос
				result = await ApiService.postAd(ad);  // Используем postAd из ApiService
			}
			// setResponse(result.data);

			console.log(result);
			if (result.statusText !== 'Created') {
				setError('Произошла ошибка');
			}
			else {
				navigate(`/list`);
			}

			// // После успешного запроса, можем перенаправить на страницу с этим объявлением
			// navigate(`/item/${result.data.id}`);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Произошла ошибка');
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
		<form onSubmit={handleSubmit}>
			{renderStep()}
		</form>

		{error && <div style={{ color: 'red' }}>Ошибка: {error}</div>}
		</>
	);
};

export default MultiStepForm;
