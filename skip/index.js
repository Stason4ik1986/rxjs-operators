/*
* skip
*
* Ignores the first few elements of a source observable
* Number provided as argument determines how many are skipped
*
* */

// To see the result, write in the console: npx babel-node skip

import Rx from 'rxjs';
import { fromStdIn } from '../utitity'

// Try to typing

console.log('INPUT STARTING');
fromStdIn()
    .skip(10)
    .subscribe(k => console.log(k));