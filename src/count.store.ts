import { State, Action, Store, Selector, createSelector } from '@ngxs/store';
import { Storage } from '@capacitor/core';

export class Add {
  static readonly type = 'Add';
}

@State<number>({
  name: 'count',
  defaults: 0
})
export class CountState {

  constructor(private store: Store) { }

  @Action(Add)
  add({ getState, setState }) {
    const state = getState();
    setState(state + 1);
    Storage.set({key: 'count', value: state + 1})
  }

  // This Selector throws an error.
  // TypeError: Cannot read property 'value' of undefined
  // The below Selector however works just fine.
  // @Selector()
  // static currentCount(state: CountState) {
  //   return state;
  // }

  static countState() {
    return createSelector([CountState], (state: number) => state)
  }
}