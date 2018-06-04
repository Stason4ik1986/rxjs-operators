/*
* windowTime
*
* Like window, but shifts to the next window after the current window has been opened for a specified amount of time
*
* */

// To see the result, write in the console: npx babel-node windowTime

import Rx from 'rxjs';

Rx.Observable
    .interval(100)
    .windowTime(1000)
    .concatMap(a => a.toArray())
    .subscribe(a => console.log(a));

