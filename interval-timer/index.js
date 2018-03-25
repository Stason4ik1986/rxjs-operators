import Rx from 'rxjs';

// const ticker = Rx.Observable.interval(2000);
// ticker.subscribe(a => console.log("A: ", a));

const stopWatch = Rx.Observable.timer(2000, 1000); // start after 2sec and do every 1sec
stopWatch.subscribe(a => console.log("A: ", a));

