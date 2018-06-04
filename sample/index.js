/*
* sample
*
* Emits the latest element from the source observable at a specified interval
* Useful if the frequency at which new elements are added,
* and the frequency as which you need to access elements vary greatly
* Not equivalent to _.sample (lodash _.sample returns a random elements from array)
*
* */

// To see the result, write in the console: npx babel-node sample

import Rx from 'rxjs';
import { fromStdIn } from '../utitity';

// Try to typing

fromStdIn()
    .sample(
        Rx.Observable.interval(1000)
    )
    .subscribe(a => console.log(a));


