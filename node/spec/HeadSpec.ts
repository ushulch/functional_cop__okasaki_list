import 'jasmine';
import * as Olist from '../src/OkasakiList';

describe('head', function() {
    it('Returns the value of the head of the list, when the list is not empty', function() {
        const list = Olist.empty();
        const singletonValue = 5;
        const singletonList = Olist.cons(singletonValue, list);

        const head = Olist.head(singletonList);

        expect(head).toBe(singletonValue);
    });

    it('Raises an exception if the list is empty', function() {
        const emptyList = Olist.empty();
        const curriedHead = function() {
            Olist.head(emptyList);
        };


        expect(curriedHead).toThrow(Olist.listEmptyError());
    });
});
