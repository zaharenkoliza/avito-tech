export interface AdEstate {
	id: number | undefined;
	name: string;
	description: string;
	location: string;
	type: string;
	image: string | undefined;
	propertyType: string;
	area: number;
	rooms: number;
	price: number;
}

export interface AdCar {
	id: number | undefined;
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
	id: number | undefined;
	name: string;
	description: string;
	location: string;
	type: string;
	serviceType: string;
	experience: number;
	cost: number;
	workSchedule: string;
}

export type Ad = {
	id: number | undefined;
	name: string;
	description: string;
	location: string;
	type: string;
	image: string | undefined;
	propertyType?: string;
	area?: number;
	rooms?: number;
	price?: number;
	brand?: string;
	model?: string;
	year?: number;
	mileage?: number;
	serviceType?: string;
	experience?: number;
	cost?: number;
	workSchedule?: string;
};