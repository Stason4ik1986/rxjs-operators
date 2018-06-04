/*
* publish
*
* Returns an observable with a special method, connect
* - Works similar to a Subject
* Unlike normal observable, published observable doesn't start executing code as soon as it subscribed to
* - Multiple subscribers can subscribe and all get identical data!
* To start the functioning of the observable, like a normal observable responding to subscribe, call connect
* If any error, forkJoin will error
* Useful for when you need the results of all of a number of sequential API calls, or none at all
* Resolves a very common web development use case
*
* */

// To see the result, write in the console: npx babel-node publish

import Rx from 'rxjs';

const currencyTicker = Rx.Observable
    .interval(1000)
    .do(() => console.log('PINGED API'))
    .map(n => `Currency info #${n} - [placeholder]`)
    .publish();

currencyTicker
    .subscribe(a => console.log('LEFT WIDGET', a));

currencyTicker
    .subscribe(a => console.log('RIGHT WIDGET', a));

currencyTicker.connect();
