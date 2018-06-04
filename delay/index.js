/*
* delay
*
* Emits values from the source array only after a specified duration has passed
* Duration is specified as a number
*
* */

// To see the result, write in the console: npx babel-node delay

import Rx from 'rxjs';

Rx.Observable
    .of(42)
    .do(() => console.log('Something do first time'))
    .delay(1200)
    .do(() => console.log('Something do second time'))
    .delay(2000)
    .subscribe(v => console.log(v));
