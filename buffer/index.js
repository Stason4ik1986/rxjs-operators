/*
* buffer
*
* Collects values from source observable until provided observable emits
* Provided observable can emit anything
* Collected values are emitted as array
* Starts buffering again immediately
*
* */

// To see the result, write in the console: npx babel-node buffer

import Rx from 'rxjs';
import { fromStdIn } from '../utitity';

// Try to typing

fromStdIn()
    .buffer(fromStdIn().filter(key => key === 'p'))
    .subscribe(a => console.log(a));


