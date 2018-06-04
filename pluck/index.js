/*
* pluck
*
* Equivalent to Lodash's pluck
* Used to map an observable of similar objects to a single property of those objects
* A string, not a function, is provided
*
* */

// To see the result, write in the console: npx babel-node pluck

import Rx from 'rxjs';

const friendsAPI = Rx.Observable
    .interval(1000)
    .map(n => ({ name: `Friend #${n}`, mutualFriend: n * 2 + 1}))
    .pluck('mutualFriend')
    .subscribe(a => console.log(a));
