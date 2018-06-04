/*
* scan
*
* Every time the source observable emits, aggregate all the values so far an emit aggregated value
* (like reduce, but emits multiple times)
*
* */

// To see the result, write in the console: npx babel-node scan

import Rx from 'rxjs';

Rx.Observable
    .interval(200)
    .take(10)
    .scan((acc, value) => acc + value, 0)
    .subscribe(a => console.log(a));


