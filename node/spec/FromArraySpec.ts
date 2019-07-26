import 'jasmine';
import * as Olist from '../src/OkasakiList';

describe('fromArray', function() {
    it('converts a list into an OkasakiList', function() {
        const normalArray = [1, 2, 3];

        const olist0 = Olist.empty<number>();
        const olist1 = Olist.cons(normalArray[0], olist0);
        const olist2 = Olist.cons(normalArray[1], olist1);
        const olist3 = Olist.cons(normalArray[2], olist2);
        const expectedOlist = olist3;

        const actualOlist = Olist.fromArray(normalArray);

        expect(actualOlist).toEqual(expectedOlist);
    });

    it('converts an empty list into an empty OkasakiList', function() {
        const expectedOlist = Olist.empty<number>();
        const actualOlist = Olist.fromArray<number>([]);

        expect(actualOlist).toEqual(expectedOlist);
    });
});
