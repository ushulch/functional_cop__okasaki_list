namespace OkasakiList.Test

open System
open Microsoft.VisualStudio.TestTools.UnitTesting
open OkasakiList


[<TestClass>]
type TestClass () =

    [<TestMethod>]
    member this.ConstructsEmpty () =
        let expected = OkasakiList.Empty
        let actual = OkasakiList.empty
        Assert.AreEqual(expected, actual)


    [<TestMethod>]
    member this.ConstructsSingleton () =
        let value = 12
        let expected = OkasakiList.Value(value, OkasakiList.Empty)
        let actual = OkasakiList.singleton value
        Assert.AreEqual(expected, actual)

    [<TestMethod>]
    member this.ConConsOntoAnEmptyList () =
        let value = "hello"
        let expected = OkasakiList.singleton value
        let actual = OkasakiList.cons value OkasakiList.empty
        Assert.AreEqual(expected, actual)

    [<TestMethod>]
    member this.ConseConsOntoANonEmptyList () =
        let value1 = "hello"
        let value2 = "world"
        let tailNode = OkasakiList.singleton value2

        let expected = OkasakiList.Olist.Value(value1, tailNode)
        let actual = OkasakiList.cons value1 tailNode

        Assert.AreEqual(expected, actual)


    [<TestMethod>]
    member this.HeadReturnsNoneOnEmptyList () =
        let expected = None
        let actual = OkasakiList.head OkasakiList.empty

        Assert.AreEqual(expected, actual)

    [<TestMethod>]
    member this.HeadReturnsCorrectValueForSingleton () =
        let value = 12
        let expected = Some(value)
        let actual = OkasakiList.head (OkasakiList.singleton value)

        Assert.AreEqual(expected, actual)


    [<TestMethod>]
    member this.HeadReturnsCorrectValueForList () =
        let value1 = 1
        let value2 = 2
        let value3 = 3

        //we load up the list in reverse order, since basic cons inserts at the head
        let olist =
            OkasakiList.singleton value3
            |> OkasakiList.cons value2
            |> OkasakiList.cons value1

        let expected = Some(value1)
        let actual = OkasakiList.head olist

        Assert.AreEqual(expected, actual)


    [<TestMethod>]
    member this.FoldlCanTraverseAnEmptyList () =
        let emptyList = OkasakiList.empty
        let initialValue = 0

        let expected = initialValue
        let actual = OkasakiList.foldl (fun (element, accumulator) -> element + accumulator) initialValue emptyList

        Assert.AreEqual(expected, actual)


    [<TestMethod>]
    member this.FoldlCanSumANonEmptyList () =
        let initialValue = 0
        let olist =
               OkasakiList.singleton 1
            |> OkasakiList.cons 2
            |> OkasakiList.cons 3

        let expected = 6
        let actual = OkasakiList.foldl (fun (element, accumulator) -> element + accumulator) initialValue olist

        Assert.AreEqual(expected, actual)
