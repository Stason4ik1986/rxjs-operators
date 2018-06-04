/*
* of(...things)
*
* Takes any number of arguments and returns an observable that emits them one after the other
*
* */

// To see the result, write in the console: npx babel-node of

import Rx from 'rxjs';

Rx.Observable.of(
    1, 2, 3, 'Four', 5, [], {}, [1, 2, 3]
).subscribe(a => console.log(a));