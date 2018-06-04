/*
* windowCount
*
* Like window, but shifts to the next window when the current window has accumulated a specified number of values
*
* */

// To see the result, write in the console: npx babel-node windowCount

import Rx from 'rxjs';

Rx.Observable
    .interval(100)
    .windowCount(10)
    .concatMap(a => a.toArray())
    .subscribe(a => console.log(a));