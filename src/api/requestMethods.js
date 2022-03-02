import axios from 'axios';

export const characterRequest = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character'
});

export const episodeRequest = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/episode'
});

export const locationRequest = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/location'
})