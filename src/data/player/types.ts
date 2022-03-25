// @ts-check
export type PlayerState = {
    inventarioById: Array<Item>,
    walletId: string,
    isLoadingInventario: boolean,
    mask: string,
    head: string,
    body: string,
    hand: string,
};

export type Item = {
    itemId: string,
    tipoItem: number,
    ownerId: string,
}

export type APIItem = {
    owner_id: string,
    item_id: string,
    tipo_item: number,
}
