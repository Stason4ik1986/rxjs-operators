/*
* fromEvent
*
* Creates an observable which emits values as they com in from a generic event source
* Event source can be many common JavaScript form controls (Button, Text input, Other DOM events)
*
* */

// To see the result, write in the console: webpack-dev-server

import Rx from 'rxjs';

Rx.Observable.fromEvent(document.forms[0], 'submit')
    .do(() => console.log('Prevent refresh'))
    .subscribe(e => e.preventDefault());

Rx.Observable.fromEvent(document.getElementById('animal'), 'change')
    .map(event=> event.target.value)
    .subscribe(e => console.log(e));

Rx.Observable.fromEvent(document.getElementById('moto'), 'change')
    .map(event=> event.target.value)
    .subscribe(e => console.log(e));

