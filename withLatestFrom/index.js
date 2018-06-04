/*
* withLatestFrom
*
* Creates new observable that combines emissions from the source observable with the latest value from a provided observable
* Subscribers are notified only when the source observable emits, but get both values
* - No notification is received when the provided observable emits
*
* */

// To see the result, write in the console: npx babel-node withLatestFrom

import Rx from 'rxjs';
import { fromStdIn } from '../utitity';

// Try to typing

Rx.Observable
    .interval(1000)
    .withLatestFrom(fromStdIn())
    .subscribe(a => console.log(a));
