/*
* combineLatest(...providedweb  )
*
* Once each of the provided observables has emitted at least once emit a bundle containing all the latest values
* After that, emit an updated bundle whenever any provided observable emits
* Works like zip, except indexes do not have to match
* - Moves faster than the pace of the slowest provided observable
*
* */

// To see the result, write in the console: webpack-dev-server

import Rx from 'rxjs';

const countryObservable = Rx.Observable.fromEvent(
    document.getElementById('country'),
    'change',
    e => e.target.value
);

const cityObservable = Rx.Observable.fromEvent(
    document.getElementById('city'),
    'change',
    e => e.target.value
);

Rx.Observable.combineLatest(
    countryObservable,
    cityObservable
)
.subscribe(a => console.log(a));


