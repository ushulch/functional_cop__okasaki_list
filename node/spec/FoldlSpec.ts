import 'jasmine';
import * as Olist from '../src/OkasakiList';

describe('foldl', function() {
    it('calls folder_fun against every element in the list', function() {
        const values = [1, 2, 3, 4];

        const list0 = Olist.empty<number>();
        const list1 = Olist.cons(values[0], list0);
        const list2 = Olist.cons(values[1], list1);
        const list3 = Olist.cons(values[2], list2);
        const list4 = Olist.cons(values[3], list3);

        const expectedSum = values[0] + values[1] + values[2] + values[3];

        const actualSum = Olist.foldl<number, number>(function (elem, accum) {return elem + accum; }, 0, list4);

        expect(actualSum).toBe(expectedSum);
    });


    it('calls folder_fun against every element in the list from left to right', function() {
        const values = ['hello', 'world', 'other', 'stuff'];

        const list0 = Olist.empty<string>();
        const list1 = Olist.cons(values[0], list0);
        const list2 = Olist.cons(values[1], list1);
        const list3 = Olist.cons(values[2], list2);
        const list4 = Olist.cons(values[3], list3);

        const expectedString = values[0] + values[1] + values[2] + values[3];

        const actualString = Olist.foldl<string, string>(function (elem, accum) {return elem + accum;}, '', list4);

        expect(actualString).toBe(expectedString);
    });

    it('returns the initial value when called against the empty list', function() {
        const initialValue = 128;
        const result = Olist.foldl<number, number>(function (elem, accum) {return elem + accum;}, initialValue, Olist.empty());

        expect(result).toBe(initialValue);
    });

});
