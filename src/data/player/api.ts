import axios from 'axios';
import * as mappers from './mappers';

export const getInventario = (walletId: string, chavePublica: string): Promise<any> => {
    return axios.get(`wallet/${walletId}/chave/${chavePublica}/inventario/`)
        .then((response: any) => {
            return mappers.mapInventario(response.data.conta);
        }).catch(error => {
            console.log(error);
        });
}

// export const postUserData = (walletId: string, chavePublica: string): Promise<any> => {
//     return axios.post('user/login', mapUserDataToApi(walletId, chavePublica))
//         .then(response => {
//             return mapUserDataFromApi(response.data);
//         }).catch(error => {
//             console.log(error);
//         });
// }