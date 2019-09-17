module Main where

import qualified OkasakiList as OkasakiList

main :: IO ()
main =
    let
        olist = OkasakiList.empty :: OkasakiList.OkasakiList Int
    in
      putStrLn $ show olist
