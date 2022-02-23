import { characterRequest } from './requestMethods';

export const getCharacters = async (page=1) => {
    const { data } = await characterRequest.get(`/?page=${page}`);
    return data;
}