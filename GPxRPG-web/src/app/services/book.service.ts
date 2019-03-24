import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BookService {
    // A service to fetch and manage Hero data from some data store

    bookDataURL = 'https://raw.githubusercontent.com/mcgrawm/GPxRPG/master/GPxRPG-web/bookData/bookData_0.json';
    heroes      = [];   // hero array

    constructor(private http: HttpClient) { }

    loadData() {
        // for now, create two Hero instances, hardcoded. These will get replaced by an http call.
        this.heroes = [
            {
                name: 'Test Hero 0',
                qualities: ['Curious', 'Quick', 'Nervous', 'Kind']
            },
            {
                name: 'Test Hero 1',
                qualities: ['Strong', 'Loud', 'Sleepy']
            }
        ];

        return this.http.get<any[]>(this.bookDataURL);  // returns Observable

    }

}
