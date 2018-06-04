/*
* zip(...provided)
*
* Bundles the latest emissions of a number of observables into a single observable
* Indexes of bundled emissions must match
* Zipped observable will emit at the pace of the slowest ancestor
*
* */

// To see the result, write in the console: npx babel-node zip

import Rx from 'rxjs';

// Try to typing

const slowNumberObservable = Rx.Observable.interval(100);
const slowSquareObservable = Rx.Observable.interval(350).map(n => n * n);

slowNumberObservable.subscribe(a => console.log(a));
slowSquareObservable.subscribe(a => console.log(a));

Rx.Observable.zip(
    slowNumberObservable,
    slowSquareObservable
).subscribe(a => console.log(a));

