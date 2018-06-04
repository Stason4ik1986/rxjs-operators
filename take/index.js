/*
* take
*
* Emits only the first few values of the source observable
* Number of emitted values is specified by provided number
*
* */

// To see the result, write in the console: npx babel-node take

import Rx from 'rxjs';

Rx.Observable
    .interval(100)
    .take(5)
    .subscribe(n => console.log(n));
