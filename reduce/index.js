/*
* reduce
*
* Equivalent to array.prototype.reduce
* Aggregate all the elements of an observable after it completes
*
* */

// To see the result, write in the console: npx babel-node reduce

import Rx from 'rxjs';

Rx.Observable
    .interval(200)
    .take(10)
    .reduce((acc, value) => acc + value, 0)
    .subscribe(a => console.log(a));


