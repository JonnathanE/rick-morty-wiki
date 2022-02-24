import { characterRequest } from './requestMethods';

export const getCharacters = async (page=1, name='') => {
    const { data } = await characterRequest.get(`/?page=${page}&name=${name}`);
    return data;
}