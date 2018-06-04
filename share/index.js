/*
* share
*
* Like publish, but connect is omitted
* Observable starts executing code as soon as it subscribed to,
* but doesn't start a new thread upon the 2nd subscription, 3rd subscription and so on
* Useful for a long -lived process that gradually return values
* - I.e., A notifications service with many widgets subscribed to it
*
* */

// To see the result, write in the console: npx babel-node share

import Rx from 'rxjs';

const currencyTicker = Rx.Observable
    .interval(1000)
    .do(() => console.log('PINGED API'))
    .map(n => `Currency info #${n} - [placeholder]`)
    .share();

currencyTicker
    .subscribe(a => console.log('LEFT WIDGET', a));

currencyTicker
    .subscribe(a => console.log('RIGHT WIDGET', a));