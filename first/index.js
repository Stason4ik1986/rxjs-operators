/*
* first
*
* Roughly equivalent to array.prototype.find
* Creates an observable which completes as soon as the source observable emits an acceptable value
* Useful for extracting a value from an observable that will not complete, or that will take a long time to complete
*
* */

// To see the result, write in the console: npx babel-node first

import Rx from 'rxjs';

Rx.Observable.interval(100)
    .first(n => n === 3)
    .subscribe(a => console.log(a));
