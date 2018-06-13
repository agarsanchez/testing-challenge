import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {SearchFormComponent} from './search-form.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BooksService} from '../books.service';

describe('SearchFormComponent', () => {
    let component: SearchFormComponent;
    let fixture: ComponentFixture<SearchFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchFormComponent],
            providers: [BooksService],
            imports: [HttpClientTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('the search form', function () {
        it('should contain the needed elements to find a book', function () {
        });
    });

    describe('searching books', function () {

        it('should provide a list of books as a result of the search', inject([BooksService], (booksService: BooksService) => {
            spyOn(booksService, 'getBooks').and.returnValue({theList: []});
            // ...
            // Mock the books service, please don't integrate the backend on the component
        }));


        it('should only search when form contains valid information', function () {
        });

        it('should highlight form fields when they are invalid', function () {
        });

        it('should tell the customer that there were no results', function () {
        });

        it('should paginate the results when more than 10', function () {
        });
    });
});
