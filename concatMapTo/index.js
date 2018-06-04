/*
* concatMapTo
*
* Like concatMap, but maps to a constant with no regard for the incoming values
*
* */

// To see the result, write in the console: npx babel-node concatMapTo

import Rx from 'rxjs';

Rx.Observable
    .interval(100)
    // .map(n => Rx.Observable.range(0, n + 1))
    .concatMapTo(Rx.Observable.range(0, 10))
    .subscribe(a => console.log(a));


