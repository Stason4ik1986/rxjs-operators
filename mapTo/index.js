/*
* mapTo
*
* Converts each emitted value into a new value, without regard for the emitted value
*
* */

// To see the result, write in the console: npx babel-node mapTo

import Rx from 'rxjs';

const notificationAPI = Rx.Observable.interval(1000);

notificationAPI
    .mapTo({type: 'NOTIFICATION_ARRIVED'})
    .subscribe(a => console.log(a));