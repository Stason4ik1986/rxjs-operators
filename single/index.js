/*
* single
*
* Emits just one value which passes a predicate function, after the source observable completes
* If more than one values passes the predicate, an error will be thrown (this is unlike first)
*
* */

// To see the result, write in the console: npx babel-node single

import Rx from 'rxjs';

Rx.Observable
    .range(0, 3)
    .single(n => n % 2 === 0)
    .subscribe(a => console.log(a));


