/*
* startWith
*
* Creates a new observable that emits a provided value, then emits values from the source observable
* Useful for asynchronous observables that may not return a value for some time
*
* */

// To see the result, write in the console: npx babel-node startWith

import Rx from 'rxjs';

// Try without and with startWith
console.info('MADE API REQUEST');

Rx.Observable
    .timer(1000, 500)
    .map(n => n + 1)
    .startWith(0)
    .subscribe(a => console.log("REQUEST COMPLETE", a));

