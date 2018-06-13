import {inject, TestBed} from '@angular/core/testing';

import {BooksService} from './books.service';

describe('BooksService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BooksService]
        });
    });

    it('should be created', inject([BooksService], (service: BooksService) => {
        expect(service).toBeTruthy();
    }));

    describe('getting a list of books', function () {
        it('should get books by title', function () {
        // mock the http response
        // we should be able to define the request
        // if the service is bespoken
        // let's go to the back end...
        });

        it('should return empty list when there is an error', function () {
        });
    });
});
