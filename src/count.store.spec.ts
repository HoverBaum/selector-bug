import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';

import { CountState, Add } from './count.store';

import { STORAGE_TOKEN } from './tokens'

describe('The Count Store', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([CountState]),
      ],
      providers: [{
        provide: STORAGE_TOKEN,
        useValue: {set: () => {}}
      }]
    });
    store = TestBed.get(Store);
  });
  
  it('should initially be 0', () => {
    store.selectOnce(state => state).subscribe(number => expect(number).toBe(0));
  });

  it('should add one at a time', () => {
    store.dispatch(new Add());
    store.selectOnce(state => state).subscribe(number => expect(number).toBe(1));
  });
  
});
