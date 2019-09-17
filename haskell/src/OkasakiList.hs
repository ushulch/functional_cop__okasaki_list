module OkasakiList
  (
    OkasakiList,
    empty,
    singleton,
    cons,
    OkasakiList.head,
    OkasakiList.tail,
    OkasakiList.foldl
  ) where

import OkasakiList.Internal

empty :: OkasakiList a
empty = Empty

singleton :: a -> OkasakiList a
singleton thisValue =
  OkasakiList {value = thisValue,
               next = Empty}


cons :: a -> OkasakiList a -> OkasakiList a
cons thisValue olist =
  OkasakiList {value = thisValue,
               next = olist}

head :: OkasakiList a -> Maybe a
head olist =
  case olist of
    Empty -> Nothing
    OkasakiList{ value = v, next = _} -> Just v


tail :: OkasakiList a -> OkasakiList a
tail olist =
  case olist of
    Empty -> Empty
    OkasakiList{value = _, next = ol} -> ol

foldl :: (accumulatorType -> valueType -> accumulatorType) -> accumulatorType -> OkasakiList valueType -> accumulatorType
foldl _ initial Empty = initial
foldl fun initial (OkasakiList{value = thisValue, next = nextOlist}) =
  OkasakiList.foldl fun (fun initial thisValue) nextOlist
