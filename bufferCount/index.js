/*
* bufferCount
*
* Like buffer, but waits until a specified number of values are emitted from source before emitting buffered values
*
* */

// To see the result, write in the console: npx babel-node bufferCount

import Rx from 'rxjs';
import { fromStdIn } from '../utitity';

// Try to typing

fromStdIn()
    .bufferCount(10)
    .subscribe(a => console.log(a));

