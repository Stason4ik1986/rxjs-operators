/*
* timeout
* Creates an observable that throws an error if the source
* observable waits longer than the specified duration to emit two consecutive values
* Once source completes, timeout no longer applies
*
* */

// To see the result, write in the console: npx babel-node timeout

import Rx from 'rxjs';
import { fromStdIn } from '../utitity';

console.log('PLEASE INPUT YOUR PASSWORD QUICLY!!!!');

// Try with take() and without
fromStdIn()
    .take(10)
    .timeout(2000)
    .subscribe(a => console.log(a));


