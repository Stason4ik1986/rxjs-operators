/*
* forkJoin
*
* Forking - the process of running all the observables at once
* Joining - process of combining the results
* If any error, forkJoin will error
* Useful for when you need the results of all of a number of sequential API calls, or none at all
* Resolves a very common web development use case
* To see the result, write in the console: npx babel-node forkJoin
*
* */

// To see the result, write in the console: npx babel-node forkJoin

import Rx from 'rxjs';

const friendAPI = Rx.Observable
    .timer(1000)
    .mapTo({name: 'Hank'});

const prefernceAPI = Rx.Observable
    .timer(1700)
    .mapTo({theme: 'Dark'});

Rx.Observable.forkJoin(
    friendAPI,
    prefernceAPI
).subscribe(a => console.log(a));


