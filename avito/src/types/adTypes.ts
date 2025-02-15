export interface AdEstate {
	id: number;
	name: string;
	description: string;
	location: string;
	type: string;
	propertyType: string;
	area: number;
	rooms: number;
	price: number;
}

export interface AdCar {
	id: number;
	name: string;
	description: string;
	location: string;
	type: string;
	brand: string;
	model: string;
	year: number;
	mileage: number;
}

export interface AdService {
	id: number;
	name: string;
	description: string;
	location: string;
	type: string;
	serviceType: string;
	experience: number;
	cost: number;
	workSchedule: string;
}

export type Ad = AdEstate | AdService | AdCar;