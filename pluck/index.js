import Rx from 'rxjs';

const friendsAPI = Rx.Observable
    .interval(1000)
    .map(n => ({ name: `Friend #${n}`, mutualFriend: n * 2 + 1}))
    .pluck('mutualFriend')
    .subscribe(a => console.log(a));
