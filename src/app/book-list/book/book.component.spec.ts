import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookComponent} from './book.component';

describe('BookComponent', () => {
    let component: BookComponent;
    let fixture: ComponentFixture<BookComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BookComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('book information', function () {

        it('should provide basic information about the book', function () {
        });

        it('should provide an image of the cover', function () {
        });

        it('should provide information about the retailer', function () {
        });

        it('should provide the retailer price', function () {
        });
    });
});
