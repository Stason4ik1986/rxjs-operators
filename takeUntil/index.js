/*
* takeUntil
*
* Like take, but emits values from the source observable only until provided observable emits (common example timer)
*
* */

// To see the result, write in the console: npx babel-node takeUntil

import Rx from 'rxjs';

Rx.Observable
    .interval(100)
    .takeUntil(Rx.Observable.interval(1000))
    .subscribe(n => console.log(n));
