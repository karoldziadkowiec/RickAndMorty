import axios from "axios";
import RickAndMortyApiURL from '../../config/RickAndMortyApi.tsx';

export const fetchCharacters = async (page: number, status: string) => {
    const response = await axios.get(`${RickAndMortyApiURL}/?page=${page}&status=${status}`);
    return response.data;
};

export const fetchCharacterById = async (id: string) => {
    const response = await axios.get(`${RickAndMortyApiURL}/${id}`);
    return response.data;
};