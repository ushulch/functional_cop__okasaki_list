module OkasakiListSpec (spec) where

import Test.Hspec
import qualified OkasakiList as OkasakiList
import qualified OkasakiList.Internal as OLInternal

spec :: Spec
spec = do
  describe "OkasakiList" $ do
    it "Can be constructed as empty" $
      let
        expected = OLInternal.Empty :: OkasakiList.OkasakiList Int
        actual = OkasakiList.empty :: OkasakiList.OkasakiList Int
      in
        actual `shouldBe` expected

    it "Can be constructed as a singleton" $
      let
        value = 12
        expected = OLInternal.OkasakiList{OLInternal.value = value, OLInternal.next = OLInternal.Empty} :: OkasakiList.OkasakiList Int
        actual = OkasakiList.singleton value
      in
        actual `shouldBe` expected

  describe "OkasakiList.cons" $ do
    it "Can cons onto an empty list" $
      let
        value = 12
        expected = OkasakiList.singleton value :: OkasakiList.OkasakiList Int
        actual = OkasakiList.cons value OkasakiList.empty
      in
        actual `shouldBe` expected

    it "Can cons onto a singleton" $
      let
        value1 = 1
        value2 = 2
        expected = OLInternal.OkasakiList{OLInternal.value = value1, OLInternal.next =
                                             OLInternal.OkasakiList{OLInternal.value = value2, OLInternal.next = OLInternal.Empty}}
        actual = OkasakiList.cons value1 $ OkasakiList.singleton value2 :: OkasakiList.OkasakiList Int
      in
        actual `shouldBe` expected

    it "Can cons onto a non-empty list" $
      let
        value1 = 1
        value2 = 2
        value3 = 3
        expected = OLInternal.OkasakiList{OLInternal.value = value1, OLInternal.next =
                                             OLInternal.OkasakiList{OLInternal.value = value2, OLInternal.next =
                                                                       OLInternal.OkasakiList{OLInternal.value = value3, OLInternal.next = OLInternal.Empty}}}
                   :: OkasakiList.OkasakiList Int

        actual = OkasakiList.cons value1 $
                 OkasakiList.cons value2 $
                 OkasakiList.singleton value3

      in
        actual `shouldBe` expected


  describe "OkasakiList.head" $ do
    it "can take the head of an empty list, returning Nothing" $
      let
        emptyList = OkasakiList.empty :: OkasakiList.OkasakiList Int
      in
      (OkasakiList.head emptyList) `shouldBe` Nothing

    it "can take the head of a non empty list" $
      let
        value = 12 :: Int
        list = OkasakiList.singleton value
      in
        (OkasakiList.head list) `shouldBe` Just value


  describe "OkasakiList.tail" $ do
    it "can take the tail of an empty list, returning the empty list" $
      let
        emptyList = OkasakiList.empty :: OkasakiList.OkasakiList Int
      in
        (OkasakiList.tail emptyList) `shouldBe` emptyList


    it "can take the tail of a singleton list, returning the empty list" $
      let
        emptyList = OkasakiList.empty :: OkasakiList.OkasakiList Int
        singletonList = OkasakiList.singleton 12
      in
        (OkasakiList.tail singletonList) `shouldBe` emptyList

    it "can take the tail of a non-empty list, returning everything but the head" $
      let
        expectedTail = OkasakiList.singleton 12 :: OkasakiList.OkasakiList Int
        olist = OkasakiList.cons 14 expectedTail
      in
        (OkasakiList.tail olist) `shouldBe` expectedTail


  describe "OkasakiList.foldl" $ do
    it "can sum a list" $
      let
        olist = OkasakiList.cons 1 $ OkasakiList.cons 2 $ OkasakiList.singleton 3 :: OkasakiList.OkasakiList Int
        expectedValue = 6
        actualValue = OkasakiList.foldl (\total val -> total + val) 0 olist
      in
        actualValue `shouldBe` expectedValue
