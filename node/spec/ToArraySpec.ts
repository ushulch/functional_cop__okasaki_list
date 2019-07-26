import 'jasmine';
import * as Olist from '../src/OkasakiList';

describe('toArray', function() {
    it('returns an empty array when given an empty OkasakiList', function() {
        const expectedArray: Array<number> = [];
        const actualArray = Olist.toArray(Olist.empty<number>());

        expect(actualArray).toEqual(expectedArray);
    });

    it('returns an array representation of the OkasakiList', function() {
        const expectedArray = [1, 2, 3, 4];
        const olist = Olist.fromArray(expectedArray);
        const actualArray = Olist.toArray(olist);

        expect(expectedArray).toEqual(actualArray);
    });
});
