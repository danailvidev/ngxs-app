import { Store, Action, StateContext, State } from '@ngxs/store';
import { SetUsername } from './app.actions';
import { ConfirmOrder } from '../salad/salad.actions';

export interface AppStateModel {
    username: string;
    orderId: number;
    status?: 'pending' | 'confirmed' | 'declined';
}

@State<AppStateModel>({
    name: 'app',
    defaults: {
        username: '',
        orderId: Math.floor(Math.random() * 23000)
    }
})
export class AppState {

    @Action(SetUsername)
    setUsername({ patchState, getState }: StateContext<AppStateModel>, { payload }: SetUsername) {
        const currentUser = getState().username;
        console.log(currentUser);
        patchState({ username: payload });
    }

    @Action(ConfirmOrder, { cancelUncompleted: true })
    confirm({ dispatch, patchState }: StateContext<AppStateModel>) {
        patchState({ status: 'pending' });

        // return this.orderService.post().pipe(
        //     tap(success => (success ? dispatch(OrderSuccess) : dispatch(OrderFailed)))
        // );

        return true;
    }

}