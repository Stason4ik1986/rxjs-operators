/*
* window
*
* All emissions within a specified window of time are bundled into an array and emitted together
* Like buffer, but emissions are bundled into an array
* A provided observable indicates when to "close" the window
* - New window is opened immediately
* - Observable emits an array at this time
* - First window opens automatically
*
* */

// To see the result, write in the console: npx babel-node window

import Rx from 'rxjs';

Rx.Observable
    .interval(100)
    .window(Rx.Observable.interval(1000))
    .concatMap(a => a.toArray())
    .subscribe(a => console.log(a));

