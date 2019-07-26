import {Maybe, Just, Nothing} from './Maybe';

type foldFunType<T, U> = (elementValue: T, accumulatorValue: U) => U;


class OLNode<T> {
    constructor(
        readonly value: T,
        readonly maybeNext: Maybe<OLNode<T>>
    ){};
};

class OkasakiList<T> {
    constructor(
        readonly maybeHead: Maybe<OLNode<T>>
    ){};
};


export function listEmptyError() : Error {
    return new Error('List must not be empty, this is a bug');
}


export function empty<T>() : OkasakiList<T> {
    return {maybeHead: Nothing()};
}

export function cons<T>(newValue: T, list: OkasakiList<T>) : OkasakiList<T> {
    const newNode = {value: newValue, maybeNext: list.maybeHead};
    return {maybeHead: Just(newNode)};
}

export function tail<T>(list: OkasakiList<T>): OkasakiList<T>{
    switch(list.maybeHead.kind) {
        case "Just": {
            return {maybeHead: list.maybeHead.value.maybeNext};
        }
        case "Nothing": {
            throw listEmptyError();
        }
    }
}

export function head<T>(list: OkasakiList<T>): T {
    switch(list.maybeHead.kind) {
        case "Just": {
            return list.maybeHead.value.value;
        }
        case "Nothing": {
            throw listEmptyError();
        }
    }
}

export function isEmpty<T>(list: OkasakiList<T>) : boolean {
    return (list.maybeHead.kind === "Nothing");
}


export function foldl<T, U>(foldFun :foldFunType<T, U>, initialValue : U, list: OkasakiList<T>): U {
    switch(list.maybeHead.kind) {
        case "Just": {
            const newInitialValue = foldFun(list.maybeHead.value.value, initialValue);
            return foldl(foldFun, newInitialValue, tail(list));
        }
       case "Nothing": {
           return initialValue;
       }
    }
}


export function fromArray<T>(array: Array<T>) : OkasakiList<T> {
    const reducer = function(olist: OkasakiList<T>, value: T): OkasakiList<T> {
        return cons(value, olist);
    };

    const initialValue = empty<T>();

    return array.reduce(reducer, initialValue);
}


export function toArray<T>(olist: OkasakiList<T>) : Array<T> {
    const folder = function (value: T, newArray: Array<T>) {
        return [value].concat(newArray);
    };

    const initialValue: Array<T> = [];

    return foldl<T, Array<T>>(folder, initialValue, olist);
}
