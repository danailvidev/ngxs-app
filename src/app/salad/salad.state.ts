import { Selector, State } from '@ngxs/store';

export interface SaladStateModel {
    dressing: string;
    price: number;
    toppings: string[];
}

const defaults: SaladStateModel = {
    dressing: 'ranch',
    price: 9.99,
    toppings: []
};

@State<SaladStateModel>({
    name: 'salad',
    defaults
})
export class SaladState {
    @Selector()
    static getDressing(state: SaladStateModel) {
        return state.dressing.toLocaleUpperCase();
    }
}