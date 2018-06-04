/*
* concat
*
* Loosely equivalent Array.prototype.concat
* Creates an observable which emits all values from a source observable,
* then emits all values from a provided observable
*
* */

// To see the result, write in the console: npx babel-node concat

import Rx from 'rxjs';

Rx.Observable
    //.range(1, 10)
    .interval(100)
    .take(20)
    .concat(Rx.Observable
                //.range(1, 20)
                .interval(100)
                .map(n => '#2' + n)
                .skip(10)
    )
    .subscribe(n => console.log(n));


