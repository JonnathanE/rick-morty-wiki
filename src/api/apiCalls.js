import { characterRequest } from './requestMethods';

export const getCharacters = async (page = 1, name = '', status = '', species = '', gender = '') => {
    const { data } = await characterRequest.get(`/?page=${page}&name=${name}&status=${status}&species=${species}&gender=${gender}`);
    return data;
}