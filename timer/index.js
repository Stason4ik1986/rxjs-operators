/*
* timer (duration, [interval])
*
* Emits once after the specified duration has passed
* If a second argument is passed, it will then emit each time that interval passes, indefinitely
*
* */

// To see the result, write in the console: npx babel-node timer

import Rx from 'rxjs';

const stopWatch = Rx.Observable.timer(2000, 1000); // start after 2sec and do every 1sec

stopWatch.subscribe(a => console.log("A: ", a));

