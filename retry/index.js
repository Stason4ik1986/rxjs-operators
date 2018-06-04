/*
* retry
*
* If the source observable throws an error, suppress the error and try again a specified number of times
* Number of repetitions is specified by a provided number
* Has no effect if the source never errors
*
* */

// To see the result, write in the console: npx babel-node retry

import Rx from 'rxjs';

const buggyAPI = Rx.Observable
    .timer(1000)
    .do(a => console.log("You called the buggy API"))
    .do(a => { throw new Error() });

buggyAPI
    .retry(3)
    .subscribe(a => console.log(a));
