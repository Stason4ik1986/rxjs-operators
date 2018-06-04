/*
* bufferTime
*
* Like buffer, but waits a specified amount of time before emitting buffered values
*
* */

// To see the result, write in the console: npx babel-node bufferTime

import Rx from 'rxjs';
import { fromStdIn } from '../utitity';

// Try to typing

fromStdIn()
    .bufferTime(1000)
    .subscribe(a => console.log(a));


