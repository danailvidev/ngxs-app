export class ConfirmOrder {
    static readonly type = '[salad] confirm order';
    constructor(public payload: string) {}
}