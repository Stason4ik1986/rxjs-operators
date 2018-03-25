import Rx from 'rxjs';

const range = Rx.Observable.range(1, 10);

range
    .filter(n => n % 2 === 0)
    .subscribe(a => console.log(a));

