/*
* map
*
* Equivalent to JavaScript's array.prototype.map
* Converts each element to something new based on provided mutator
*
* */

// To see the result, write in the console: npx babel-node mapTo

import Rx from 'rxjs';

const notificationAPI = Rx.Observable.interval(1000);

notificationAPI
    .mapTo({type: 'NOTIFICATION_ARRIVED'})
    .subscribe(a => console.log(a));