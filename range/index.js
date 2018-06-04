/*
* range(start, length)
*
* Creates an observable that synchronously length integers starting at start
* A useful starting point
*
* */

// To see the result, write in the console: npx babel-node range

import Rx from 'rxjs';

const rangeObservable = Rx.Observable.range(1, 9);

rangeObservable
    .subscribe(e => console.log(`Range observable ${e}`));