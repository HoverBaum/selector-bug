import { State, Action, Store, Selector, createSelector } from '@ngxs/store';
import { Inject } from '@angular/core';
import { STORAGE_TOKEN } from './tokens';

export class Add {
  static readonly type = 'Add';
}

@State<number>({
  name: 'count',
  defaults: 0
})
export class CountState {

  constructor(
    private store: Store,
    @Inject(STORAGE_TOKEN) private storage
  ) { }

  @Action(Add)
  add({ getState, setState }) {
    const state = getState();
    setState(state + 1);
    this.storage.set({key: 'count', value: state + 1})
  }

  // This Selector throws an error.
  // TypeError: Cannot read property 'value' of undefined
  // The below Selector however works just fine.
  @Selector()
  static currentCount(state: CountState) {
    return state;
  }

  // static countState() {
  //   return createSelector([CountState], (state: number) => state)
  // }
}