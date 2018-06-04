/*
* groupBy
*
* After the source observable completes...
* - Separate all the emitted values into groups based on an accessor
* - Emit each of those groups as an observable
* */

// To see the result, write in the console: npx babel-node groupBy

import Rx from 'rxjs';

Rx.Observable
    .range(1, 20)
    .groupBy(n => n % 2 === 0)
    .mergeMap(nGroup => nGroup.toArray())
    .subscribe(a => console.log(a));


