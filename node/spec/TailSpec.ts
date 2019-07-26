import 'jasmine';
import * as Olist from '../src/OkasakiList';

describe('tail', function() {
    it('returns a copy of the list without the head', function() {
        const emptyList = Olist.empty();
        const singletonList = Olist.cons(5, emptyList);
        const doubleList = Olist.cons(6, singletonList);
        const trippleList = Olist.cons(7, doubleList);

        const tailOfTrippleList = Olist.tail(trippleList);

        expect(tailOfTrippleList).toEqual(doubleList);
    });

    it('raises a list empty error when called against the empty list', function() {
        const emptyList = Olist.empty();
        const curriedTail = function() {
            Olist.tail(emptyList);
        }


        expect(curriedTail).toThrow(Olist.listEmptyError())
    });

    it('returns the empty list when called against a singleton list', function() {
        const emptyList = Olist.empty();
        const singletonList = Olist.cons(5, emptyList);

        expect( Olist.tail(singletonList) ).toEqual(emptyList);
    });
});
