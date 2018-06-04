/*
* bufferToggle
*
* Like buffer, but takes two arguments - an opening and closing observable
* - Closing observable is provided a factory function
* Buffer starts a buffer when opening observable emits
* Emits values when closing observable emits
* Can have multiple buffers going simultaneously
*
* */

// To see the result, write in the console: npx babel-node bufferToggle

import Rx from 'rxjs';
import { fromStdIn } from '../utitity';

// Try to typing

fromStdIn()
    .bufferToggle(
        fromStdIn().filter(key => key === 'p'), // open buffer by 'p'
        () => fromStdIn().filter(key => key === 'o')) // close buffer by 'o'
    .subscribe(a => console.log(a));


