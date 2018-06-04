/*
* multicast
*
* Like publish, but returns a Subject instead of an observable with a special property
* BehaviorSubject, ReplaySubject and others can all be used
*
* */

// To see the result, write in the console: npx babel-node multicast

import Rx from 'rxjs';

const shared = new Rx.BehaviorSubject(-1);
const currencyTicker = Rx.Observable
    .interval(1000)
    .do(() => console.log('PINGED API'))
    .map(n => `Currency info #${n} - [placeholder]`)
    .multicast(shared);

currencyTicker
    .subscribe(a => console.log('LEFT WIDGET', a));

currencyTicker
    .subscribe(a => console.log('RIGHT WIDGET', a));

currencyTicker.connect();



