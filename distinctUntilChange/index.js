/*
* distinctUntilChanged()
*
* Creates an observable which only emits the latest value from the source observable
* if it is different than the one before it
*
*
* */

// To see the result, write in the console: npx babel-node distinctUntilChange

import Rx from 'rxjs';

// Try to do it with distinctUntilChanged() and without distinctUntilChanged()

Rx.Observable
    .interval(100)
    .map(n => ~~(n / 10))
    .distinctUntilChanged()
    .subscribe(a => console.log(a));