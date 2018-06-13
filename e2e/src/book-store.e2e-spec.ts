import {AppPage} from './app.po';

describe('Book Store Application', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    describe('finding a book', function () {

        describe('filtering books', function () {

            it('should provide a list of books when customer searches by name', function () {
            });

            it('should refine the list of books when the customer filters by a preferred retailer', function () {
            });
        });

        describe('finding the best deal', function () {

            it('should allow the customer to sort the list of books by price', function () {
            });
        });

        describe('getting the book as soon as possible', function () {

            it('should allow the customer to sort the list of books by delivery date', function () {
            });
        });

    });

    describe('buying books', function () {

        describe('the shopping kart', function () {

            it('should allow the customer to review the kart', function () {
            });

            it('should allow the customer to edit the kart', function () {
            });

            it('should send an email with the shopping kart summary to the customer', function () {
            });
        });

        describe('checking out!', function () {

            it('should deliver the books to the customer address', function () {
            });

            it('should get customer payment from PayPal', function () {
            });
        });
    });
});
