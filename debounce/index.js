/*
* debounce
*
* Discard any values that are emitted within specified period of time after the previous emission
* Like throttle but with an initial value
* Duration is specified by a provided observable
*
* */

// To see the result, write in the console: npx babel-node debounce

import Rx from 'rxjs';
import { fromStdIn } from '../utitity';

// Try to typing
fromStdIn()
    .debounce(
        () => Rx.Observable.timer(1000)
    )
    .subscribe(a => console.log(a));



