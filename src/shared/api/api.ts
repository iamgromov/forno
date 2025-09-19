import axios, { type AxiosError, type AxiosResponse } from 'axios';
import type { IPizzasArray } from '../types/pizzas.interface';
import { API_URL } from './config';

/** Метод для получения данных */
const getItems = async (
  categoryId,
  sortType,
  searchValue,
  currentPage
): Promise<IPizzasArray> => {
  try {
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    const response: AxiosResponse<IPizzasArray> = await axios.get(
      `${API_URL}?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
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
