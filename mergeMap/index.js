/*
* mergeMap
*
* If the source observable emits observables,
* continuously subscribe to those and emit any value that comes from any of them
*
* */

// To see the result, write in the console: npx babel-node mergeMap

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

const config = {
    blue: bluePostFeed,
    red: redHeraldFeed,
    green: greeTribuneFeed
};

const colors = ['blue', 'red', 'green'];

Rx.Observable.from(colors)
    .mergeMap(color => config[color])
    .subscribe(a => console.log(a));


