import { Transactions } from './transactions';
import { Notes } from './notes';

export class ItemResponse {
    constructor(
        id: number,
        item: string,
        description: string,
        par: number,
        quantity: number,
        surplus: number,
        transactions: Transactions[] = [],
        notes: Notes[] = [],
        store: string,
        address: string,
        city: string,
        state: string
    ){}

}
