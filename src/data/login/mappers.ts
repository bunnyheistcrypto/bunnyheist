import { UserState } from "./types";

export const mapUserDataFromApi = (response: any): UserState => ({
    walletId: response.wallet_id,
    chavePublica: response.chave_publica,
    saldo: response.saldo,
    frase: response.frase,
    token: response.token,
});

export const mapUserDataToApi = (walletId: string, chavePublica: string): any => ({
    wallet_id: walletId,
    chave_publica: chavePublica,
})