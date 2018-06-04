/*
* mergeAll(...)
*
* Merges all provided observables
*
* */

// To see the result, write in the console: npx babel-node mergeAll

import Rx from 'rxjs';

const bluePostFeed = Rx.Observable
    .interval(1000)
    .map(n => `Blue Post Article #${n}`);

const redHeraldFeed = Rx.Observable
    .interval(650)
    .map(n => `Red Herald Article #${n}`);

const greeTribuneFeed = Rx.Observable
    .interval(1200)
    .map(n => `Green Tribune Article #${n}`);

Rx.Observable.of(bluePostFeed, redHeraldFeed, greeTribuneFeed)
    .mergeAll()
    .subscribe(a => console.log(a));



