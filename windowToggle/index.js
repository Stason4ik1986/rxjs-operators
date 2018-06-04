/*
* windowToggle
*
* Like window, but takes two observables - one which opens a window and another which closes it
* Closing observable is a factory function, like bufferToggle
*
* */

// To see the result, write in the console: npx babel-node windowToggle

import Rx from 'rxjs';
import { fromStdIn } from '../utitity';

// Press key "p" and then "o"

Rx.Observable
    .interval(100)
    .windowToggle(
        fromStdIn().filter(key => key === 'p'),
        () => fromStdIn().filter(key => key === 'o'),
    )
    .concatMap(a => a.toArray())
    .subscribe(a => console.log(a));

