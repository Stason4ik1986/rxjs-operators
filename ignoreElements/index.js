/*
* ignoreElements
*
* Doesn't emit and values from source observable, but does emit an error or complete state from the source
* Usage is obscure
*
* */

// To see the result, write in the console: npx babel-node ignoreElements

import Rx from 'rxjs';

console.log('STARTED');
Rx.Observable
    .interval(100)
    .take(20)
    .ignoreElements()
    .subscribe({
        next: a => console.log(a),
        complete: a => console.log('COMPLETED!!!', a)
    });


