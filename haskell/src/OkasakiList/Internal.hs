module OkasakiList.Internal where

data OkasakiList a = Empty
                   | OkasakiList{value :: a, next :: OkasakiList a}
  deriving (Show, Eq)
