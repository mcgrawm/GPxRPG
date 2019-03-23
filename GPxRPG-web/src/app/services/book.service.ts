import { Output } from '@angular/core';

export class BookService {
    // A service to fetch and manage Hero data from some data store

    bookDataURL = 'https://raw.githubusercontent.com/mcgrawm/GPxRPG/master/GPxRPG-web/bookData/bookData_0.json';
    heroes      = [];   // hero array

    loadData() {
        // for now, create two Hero instances, hardcoded
        this.heroes = [
            {
                name: 'MeeMooLah',
                qualities: ['Curious', 'Quick', 'Nervous', 'Kind']
            },
            {
                name: 'BinVamZib',
                qualities: ['Strong', 'Loud', 'Sleepy']
            }
        ];

        // Eventually, we should emit data load status events, as an Observable...

    }

}
