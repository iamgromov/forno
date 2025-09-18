import axios, { type AxiosError, type AxiosResponse } from 'axios';
import type { IPizzasArray } from '../types/pizzas.interface';
import { API_URL } from './config';

/** Метод для получения данных */
const getItems = async (): Promise<IPizzasArray> => {
  try {
    const response: AxiosResponse<IPizzasArray> = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error as AxiosError | Error)) {
      console.error(
        `Ошибка при загрузке: ${
          (error as AxiosError).response?.data || (error as Error).message
        }`
      );
    } else {
      console.error(`Ошибка сети: ${(error as Error).message}`);
    }
    throw error;
  }
};

export { getItems };
