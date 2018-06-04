/*
* takeWhile
*
* Like take, but emits values from predicate returns false the source only until a provided
* Passing values subsequent to the first failing value will not emitted  (this is unlike filter)
*
* */


// To see the result, write in the console: npx babel-node takeWhile

import Rx from 'rxjs';

Rx.Observable
    .interval(100)
    .takeWhile(n => n < 7)
    .subscribe(n => console.log(n));
