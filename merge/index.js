/*
* merge
*
* Creates new observable which combines the source and provided observable
* Works like concat^ but all observables are subscribed to at once
* - Doesn't wait for previous observable to complete to start next one
* Hard to determine post merge what the source was
*
* */

// To see the result, write in the console: npx babel-node merge

import Rx from 'rxjs';

const redHeraldFeed = Rx.Observable
    .interval(650)
    .map(n => `Red Herald Article #${n}`);

bluePostFeed
    .merge(redHeraldFeed)
    .subscribe(a => console.log(a));


