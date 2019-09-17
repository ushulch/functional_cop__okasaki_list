namespace OkasakiList

module OkasakiList =

    type Olist<'T> =
        | Empty
        | Value of value : 'T * next : Olist<'T>

    let empty = Empty

    let singleton a =
        Value(a, Empty)

    let cons value olist =
        Value(value, olist)

    let head olist =
        match olist with
        | Empty -> None
        | Value(value, _olist) -> Some(value)

    let rec foldl func initialValue olist  =
        match olist with
            | Empty -> initialValue
            | Value(value, nextOlist) -> foldl func (func value initialValue) nextOlist
