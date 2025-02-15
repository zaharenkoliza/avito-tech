import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Ad } from '../types/adTypes';

// interface ApiResponse<T> {
// 	status: string;
// 	data: T;
// 	message?: string;
// }

const api = axios.create({
	baseURL: 'http://localhost:3000/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default class ApiService {
	static async postAd(adData: Ad): Promise<AxiosResponse<Ad>> {
		return this.request('post', '/items', adData);
	}

	static async getAds(): Promise<AxiosResponse<Ad[]>> {
		return this.request('get', '/items');
	}

	static async getAd(id: number): Promise<AxiosResponse<Ad>> {
		return this.request('get', `/items/${id}`);
	}

	static async updateAd(id: number, adData: Ad): Promise<AxiosResponse<Ad>> {
		return this.request('put', `/items/${id}`, adData);
	}

	static async deleteAd(id: number): Promise<AxiosResponse<null>> {
		return this.request('delete', `/items/${id}`);
	}

	private static async request<T>(method: string, url: string, data?: T, params = {}): Promise<AxiosResponse<T>> {
		try {
			const config: AxiosRequestConfig = { method, url, data, params };
			return await api.request<T>(config); // Работает для любого типа
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				throw error.response;
			}
			throw new Error(error instanceof Error ? error.message : 'Unknown error');
		}
	}
	
}
