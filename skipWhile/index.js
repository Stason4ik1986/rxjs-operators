/*
* skipWhile
*
* Ignores elements of a source observable until a provided predicate function returns false
*
* */

// To see the result, write in the console: npx babel-node skipWhile

import Rx from 'rxjs';
import { fromStdIn } from '../utitity'

// Try to typing

console.log('INPUT STARTING');
fromStdIn()
    .skipWhile(v => v !== 'g')
    .subscribe(k => console.log(k));