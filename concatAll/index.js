/*
* concatAll
*
* When a source observable emits other observables, subscribe to each one and emit it values
* Does not subscribe to one observable until the previous one completes
*
* */

// To see the result, write in the console: npx babel-node concatAll

import Rx from 'rxjs';
import { fromStdIn } from '../utitity';

Rx.Observable.of(
    Rx.Observable.range(1, 3),
    Rx.Observable.interval(100).take(5),
    fromStdIn()
)
    .concatAll()
    .subscribe(n => console.log(n));


