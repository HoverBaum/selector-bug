# Injection bug

This repository illustrates a bug with (not yet sure with what).

The goal is to test NGXS based Stores in an Angular + Capacitor environment.

The problems and workarounds:

**unexpected token** 

After introducing the Storage component from capacitor Jest runs complain about unexpected token. TS looses the ability to process the code correctly.

This can be fixed by adding the below configuratio to the jest part of package.json as suggested in [this issue](https://github.com/ionic-team/stencil/issues/617).

```
"transformIgnorePatterns": [
  "node_modules/(?!(@capacitor)/)"
],
"transform": {
  "^.+\\.(js|ts|tsx)$": "<rootDir>/node_modules/@stencil/core/testing/jest.preprocessor.js"
}
```

**Can't initialize Classes**

Not Angular can't find all dependencies for our Class.

To get around this we introduce `@Inject(forwardRef(() => Store)) private store: Store` intro our constructor to let Angular know that the Store will be there in time.

**Value of undefined**

Now our trouble is still that using NGXSs `@Selector` returns `Cannot read property 'value' of undefined`.

Sadly he only workaround we could come up wiht is to rewrite the selector into a different format.

```
// This Selector throws an error.
// @Selector()
// static currentCount(state: CountState) {
//   return state;
// }

static countState() {
  return createSelector([CountState], (state: number) => state)
}
```

## Thoughts

Having to change constructors is an obvious sign of something being bad and should not be necessary.