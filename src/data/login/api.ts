import axios from 'axios';
import { mapUserDataFromApi, mapUserDataToApi } from './mappers';
import { UserState } from './types';

export const postUserData = (walletId: string, chavePublica: string): Promise<any> => {
    return axios.post('user/login', mapUserDataToApi(walletId, chavePublica))
        .then(response => {
            return mapUserDataFromApi(response.data);
        }).catch(error => {
            console.log(error);
        });
}