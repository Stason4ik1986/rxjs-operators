/*
* do
*
* Discreetly executes a side-effect such as console.log() statement
* More complex side-effects (API calls, etc.) should not be handled with do()
* Receives the last emitted value as an argument, but doesn't return anything
* (last emitted value is passed to new operator automatically)
* Can't change the emitted value
*
* */

// To see the result, write in the console: npx babel-node do

import Rx from 'rxjs';

const interval = Rx.Observable.interval(1000);

interval
    .map(n => n * n)
    .do(n => console.log('N after Map#1 ::', n))
    .map(n => n / 3)
    .do(n => console.log('N after Map#2 ::', n))
    .map(n => n * n * n)
    .do(n => console.log('N after Map#3 ::', n))
    .map(n => n % 42)
    .do(n => console.log('N after Map#4 ::', n))
    .subscribe(a => console.log(a));