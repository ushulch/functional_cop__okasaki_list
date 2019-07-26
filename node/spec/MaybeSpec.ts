import 'jasmine';
import {Maybe} from '../lib/Maybe';
import {Just} from '../lib/Maybe';
import {Nothing} from '../lib/Maybe';
import {bind} from '../lib/Maybe';

describe('Maybe', function() {
    it('can be constructed with a value', function() {
        const just5 = Just(5);

        expect(just5.value).toBe(5);
    });

    it('can be constructed with nothing', function() {
        const nothing = Nothing();

        expect(nothing.kind).toEqual('Nothing');
    });

    it('can be tested to take different actions depending on if it is Just or Nothing', function() :void {
        const just5 = Just(5);

        switch(just5.kind){
            case 'Just': {
                expect(1).toBe(1);
                break;
            }
            default: {
                throw new Error(`Missing a case for the kind: ${just5.kind}`);
            }
        }

    });

    it('can be bound with another maybe', function() {
        const just5 = Just(5);

        const bindReturn = bind(just5, function(value) {
            return Just(value + 6);
        });


        switch(bindReturn.kind) {
            case 'Just': {
                expect(bindReturn.value).toEqual(11);
                break;
            }
            case 'Nothing': {
                fail('bindReturn was Nothing and just have been Just(11)');
                break;
            }
        }
    });


    it('can be bound with another maybe using its own bind', function() {
        const just5 = Just(5);

        const bindReturn = just5.bind(function(value) {
            return Just(value + 6);
        });


        switch(bindReturn.kind) {
            case 'Just': {
                expect(bindReturn.value).toEqual(11);
                break;
            }
            case 'Nothing': {
                fail('bindReturn was Nothing and just have been Just(11)');
                break;
            }
        }
    });

    it('bind returns nothing when bound with nothing', function() {
        const nothing = Nothing();

        const bindReturn: Maybe<number> = nothing.bind(function(value: number) {
            return Just<number>(value + 6);
        });

        expect(bindReturn.kind).toBe('Nothing');
    });
});
