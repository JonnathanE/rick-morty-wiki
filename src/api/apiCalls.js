import { characterRequest, episodeRequest } from './requestMethods';

export const getCharacters = async (page = 1, name = '', status = '', species = '', gender = '') => {
    const { data } = await characterRequest.get(`/?page=${page}&name=${name}&status=${status}&species=${species}&gender=${gender}`);
    return data;
}

export const getEpisode = async (episode = 1) => {
    const { data } = await episodeRequest.get(`/${episode}`);
    return data;
}