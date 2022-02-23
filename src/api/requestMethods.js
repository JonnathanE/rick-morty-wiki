import axios from 'axios';

export const characterRequest = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character'
});