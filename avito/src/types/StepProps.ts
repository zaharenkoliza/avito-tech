import { Ad } from "./adTypes";

export type StepProps = {
	ad: Ad;
	setAd: React.Dispatch<React.SetStateAction<Ad>>;
	func: () => void;
	load?: boolean;
}