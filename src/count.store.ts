import { State, Action, Store } from '@ngxs/store';

export class Add {
  static readonly type = 'Add';
}

@State<number>({
  name: 'count',
  defaults: 0
})
export class CountState {

  constructor() {}

  @Action(Add)
  add({ getState, setState }) {
    const state = getState();
    setState(state + 1);
  }
}