/*
* create(...)
*
* Creates anew observable which emits, completes and errors under custom circumstances
* Powerful, but executing too much code inside "create" is an anti-pattern
* Remember, when you have a hammer... - everything looks like a nail
*
* */

// To see the result, write in the console: npx babel-node create

import Rx from 'rxjs';

const customObservable = Rx.Observable.create(observer => {
    observer.next(42);
    // observer.complete(100);
    setInterval(() => {
        observer.next('HELLO!!')
    }, 1000);

    setTimeout(() => {
        observer.complete()
    }, 2500)
});

customObservable
    .subscribe({
        next: a => console.log('NEXT! ', a),
        complete: b => console.log('COMPLETE! ', b)
    });