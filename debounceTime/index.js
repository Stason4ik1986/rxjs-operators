/*
* debounceTime
*
* Like debounce, but duration is specified by a number
*
* */

// To see the result, write in the console: npx babel-node debounceTime

import Rx from 'rxjs';
import { fromStdIn } from '../utitity';

// Start to typing
fromStdIn()
    .debounceTime(1000)
    .subscribe(a => console.log(a));


