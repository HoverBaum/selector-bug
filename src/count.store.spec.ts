import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { CountState } from './count.store';

describe('The Count Store', () => {
  let store: Store;
  
  beforeAll(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  })

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([CountState]),
      ],
    });
    store = TestBed.get(Store);
  });
  
  it('should initially be 0', () => {
    store.selectOnce(state => state).subscribe(number => expect(number).toBe(0)) 
  });
  
});
