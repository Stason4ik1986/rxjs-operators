/*
* every
*
* Equivalent to array.prototype.every
* Emits true if each element emitted by the source array passed a provided predicate function
* Only emits after the source completes (singular)
*
* */

// To see the result, write in the console: npx babel-node every

import Rx from 'rxjs';

const range = Rx
    .Observable
    .interval(100)
    .take(100);

range
    .map(n => n* 2)
    .do(v => console.log('Value::', v))
    .every(n => n % 2 === 0)
    .subscribe(a => console.log(a));