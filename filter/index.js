/*
* filter
*
* Equivalent to array.prototype.filter
* Creates an observable that only emits the latest value from the source observables if it passes a predicate function
*
* */

// To see the result, write in the console: npx babel-node filter

import Rx from 'rxjs';

const range = Rx.Observable.range(1, 10);

range
    .filter(n => n % 2 === 0)
    .subscribe(a => console.log(a));

