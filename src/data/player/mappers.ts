import { map } from "lodash";
import { APIItem, Item } from "./types"

export const mapInventario = (items: Array<APIItem>): Array<Item> => {
    return map(items, mapItem);
}

export const mapItem = (item: APIItem): Item => {
    return {
        itemId: item.item_id,
        ownerId: item.owner_id,
        tipoItem: item.tipo_item,
    }
} 