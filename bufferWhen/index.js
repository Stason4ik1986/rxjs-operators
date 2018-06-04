/*
* bufferWhen
*
* Like bufferToggle, but requires no opening observable
* Like buffer, but factory function is provided instead of observable
*
* */

// To see the result, write in the console: npx babel-node bufferWhen

import Rx from 'rxjs';
import { fromStdIn } from '../utitity';

// Try to typing

fromStdIn()
    .bufferWhen(
        () => Rx.Observable.timer(1000)
    )
    .subscribe(a => console.log(a));


