/*
* throw()
*
* Creates an observable which immediately enters ann error state while emitting no values
* Useful for testing error handling
*
* */

// To see the result, write in the console: npx babel-node throw

import Rx from 'rxjs';

Rx.Observable
    .throw()
    .subscribe({
        next: n => console.log('N value was emitted', n),
        error: e => console.log('Entered error state', e)
    });