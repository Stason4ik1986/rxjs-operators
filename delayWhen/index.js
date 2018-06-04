/*
* delayWhen
*
* Like delay
* Instead of a number, a method which returns the duration of the delay is provided
*
* */

// To see the result, write in the console: npx babel-node delayWhen

import Rx from 'rxjs';

console.log('STARTING');
Rx.Observable
    .range(1, 9)
    // .delay(1000)
    .delayWhen(v => Rx.Observable.timer(v * 1000))
    .subscribe(n => console.log(n));