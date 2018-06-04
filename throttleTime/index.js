/*
* throttleTime
*
* Like throttle, except duration is determined by a specified number and not a observable
*
* */

// To see the result, write in the console: npx babel-node throttleTime

import { fromStdIn } from '../utitity';

// Try to typing

fromStdIn()
    .throttleTime(1000)
    .subscribe(a => console.log(a));


