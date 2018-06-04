/*
* empty()
*
* A static operator
* Creates an observable which completes immediately and returns no values
* Useful for testing, corner cases
*
* */

// To see the result, write in the console: npx babel-node empty

import Rx from 'rxjs';

Rx.Observable
    .empty()
    .subscribe({
        complete: a => console.log('Complete: ', a),
        next: a => console.log('Emmit: ', a)
    });