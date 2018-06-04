/*
* last
*
* Returns the last element of a source observable to pass a predicate, after that observable completes
* Unlike first, source must complete
*
* */

// To see the result, write in the console: npx babel-node last

import Rx from 'rxjs';

Rx.Observable
    // .range(1, 9)
    .interval(100)
    .take(10)
    .last(n => n % 2 === 0)
    .subscribe(n => console.log(n));

