import { Injectable, Output, EventEmitter } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DetailsService {
    private details = new Subject<String[]>();
    newDetails$ = this.details.asObservable();

    @Output() CardUpdate = new EventEmitter();

    public updateCard(details) {
        this.CardUpdate.next(details);
    }
}
