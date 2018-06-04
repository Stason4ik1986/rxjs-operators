/*
* partition
*
* Separates stream into two groups - one the passes the predicate, and one does not
* Like combining the results of filter with everything that was filtered out
*
* */

// To see the result, write in the console: npx babel-node partition

import Rx from 'rxjs';

// Try to typing
const [even, odd] = Rx.Observable
    .range(1,20)
    .partition(n => n % 2  === 0);

even.subscribe(a => console.log('EVEN', a));
odd.subscribe(a => console.log('ODD', a));


