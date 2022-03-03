import { characterRequest, episodeRequest, locationRequest } from './requestMethods';

export const getCharacters = async (page = 1, name = '', status = '', species = '', gender = '') => {
    const { data } = await characterRequest.get(`/?page=${page}&name=${name}&status=${status}&species=${species}&gender=${gender}`);
    return data;
}

export const getCharacter = async (id) => {
    const { data } = await characterRequest.get(`/${id}`);
    return data;
}

export const getEpisode = async (episode = 1) => {
    const { data } = await episodeRequest.get(`/${episode}`);
    return data;
}

export const getLocation = async (location = 1) => {
    const { data } = await locationRequest.get(`/${location}`);
    return data;
}