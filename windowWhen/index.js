/*
* windowCount
*
* Like window, but opening observable is a factory function
*
* */

// To see the result, write in the console: npx babel-node windowCount

import Rx from 'rxjs';

Rx.Observable
    .interval(100)
    .windowWhen(() => Rx.Observable.timer(1000))
    .concatMap(a => a.toArray())
    .subscribe(a => console.log(a));

