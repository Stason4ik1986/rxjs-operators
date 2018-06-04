/*
* let
* An operator which returns an observable that replaces the current one
* - Receives the current observable as an argument
* Usage promotes excessive trickiness
*
* */

// To see the result, write in the console: npx babel-node let

import Rx from 'rxjs';

Rx.Observable
    .interval(1000)
    .let(source => Rx.Observable.interval(100))
    .subscribe(a => console.log(a));


