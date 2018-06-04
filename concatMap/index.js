/*
* concatMap
*
* Like map, but the value returned from mutator, must be an Observable
* The Observable returned from the mutator is subscribed to (results passed to the next observable)
*
* */

// To see the result, write in the console: npx babel-node concatMap

import Rx from 'rxjs';

Rx.Observable
    .interval(100)
    // .map(n => Rx.Observable.range(0, n + 1))
    .concatMap(n => Rx.Observable.range(0, n + 1))
        .subscribe(a => console.log(a));

