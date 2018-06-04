/*
* race
*
* Waits until one observable from a group of provided observables emits, discard everything else
* Subsquent emissions from the "winner" will be emitted, while the "losers" of the race wil be ignored
*
* */

// To see the result, write in the console: npx babel-node race

import Rx from 'rxjs';

const apiA = Rx.Observable
    .timer(3000, 100)
    .map(n => `API A => ${n}`);

const apiB = Rx.Observable
    .timer(2000, 100)
    .map(n => `API B => ${n}`);

Rx.Observable.race(apiA, apiB)
    .subscribe(a => console.log(a));