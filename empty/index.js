import Rx from 'rxjs';

Rx.Observable
    .empty()
    .subscribe({
        complete: a => console.log('Complete: ', a),
        next: a => console.log('Emmit: ', a)
    });