/*
* defaultIfEmpty()
*
* Creates an observable that, if the source observable completes before emitting any values, emits the provided value
*
* */

// To see the result, write in the console: npx babel-node defaultIfEmpty

import Rx from 'rxjs';

// Try to do it with defaultIfEmpty() and without defaultIfEmpty()
Rx.Observable
    .empty()
    .defaultIfEmpty(42)
    .subscribe(a => console.log('Where is the value???', a));