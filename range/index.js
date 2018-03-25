import Rx from 'rxjs';

const rangeObservable = Rx.Observable.range(1, 9);

rangeObservable
    .subscribe(e => console.log(`Range observable ${e}`));