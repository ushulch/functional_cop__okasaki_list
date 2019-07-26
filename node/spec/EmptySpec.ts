import 'jasmine';
import * as Olist from '../src/OkasakiList';


describe('empty', function () {
    it('creates an empty list', function() {
        const list = Olist.empty();
        const isEmpty = Olist.isEmpty(list);

        expect(isEmpty).toBe(true);
    });
});
