export type Maybe<T> = _Just<T> | _Nothing;

export type BindFun<T, U> = (value: T) => Maybe<U>;

class _Nothing {
    readonly kind = "Nothing";
    constructor(){};

    bind<T, U>(_bindFun: BindFun<T, U>): _Nothing {
        return Nothing();
    }
}

class _Just<T> {
    readonly kind = "Just";
    constructor(readonly value: T){};

    bind<U>(bindFun: BindFun<T, U>): Maybe<U> {
        return bindFun(this.value);
    }
}


export function Nothing() {
    return new _Nothing();
}

export function Just<T>(value: T) : _Just<T> {
    return new _Just<T>(value);
}

export function bind<T, U>(maybe: Maybe<T>, bindFun: BindFun<T, U>): Maybe<U> {
    switch(maybe.kind) {
        case "Just": {
            return bindFun(maybe.value)
        }
        case "Nothing": {
            return Nothing();
        }
    }
}
