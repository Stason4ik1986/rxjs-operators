/*
* throttle
*
* Doesn't emit any observables until a duration of time, specified by the provided observable,
* has passed between source emissions
* Only emits the latest value
*
* */

// To see the result, write in the console: npx babel-node throttle

import { fromStdIn } from '../utitity';

// Try to typing

fromStdIn()
    .throttle(
        () => fromStdIn().filter(key => key === 'p')
    )
    .subscribe(a => console.log(a));


