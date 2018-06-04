/*
* retryWhen
*
* Like retry, but retries the source when provided observable emits
*
* */

// To see the result, write in the console: npx babel-node retryWhen

import Rx from 'rxjs';

const buggyAPI = Rx.Observable
    .timer(1000)
    .do(a => console.log("You called the buggy API"))
    .do(a => { throw new Error() });

buggyAPI
    .retryWhen(() => Rx.Observable.interval(1000))
    .subscribe(a => console.log(a));
