import 'jasmine';
import * as Olist from '../src/OkasakiList';

describe('cons', function () {
    it('Returns a list with new value as the only element when called against an empty list', function () {
        const emptyOlist = Olist.empty<number>();
        const newValue = 5;
        const updatedList = Olist.cons(newValue, emptyOlist);
        const head = Olist.head(updatedList);

        expect(head).toBe(newValue);
    });


    it('Can cons a string onto a number list if declared as such', function () {
        const emptyOlist = Olist.empty<number | string>();
        const numberValue = 5;
        const stringValue = 'Hello'
        const numberList = Olist.cons(numberValue, emptyOlist);
        const mixedList = Olist.cons(stringValue, numberList);
        const head = Olist.head(mixedList);

        expect(head).toBe(stringValue);
    });
});
