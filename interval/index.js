/*
* interval(duration)
*
* Emits value each time the specified duration passes
* Emits the numbers 0, 1, 2, 3, (etc...)
*
* */

// To see the result, write in the console: npx babel-node interval

import Rx from 'rxjs';

const ticker = Rx.Observable.interval(2000);

ticker.subscribe(a => console.log("A: ", a));

