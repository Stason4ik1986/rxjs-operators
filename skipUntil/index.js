/*
* skipUntil
*
* Ignores elements of a source observable until a provided observable emits a value
*
* */

// To see the result, write in the console: npx babel-node skipUntil

import Rx from 'rxjs';
import { fromStdIn } from '../utitity'

// Try to typing

console.log('INPUT STARTING');
fromStdIn()
    .skipUntil(Rx.Observable.timer(2000))
    .subscribe(k => console.log(k));