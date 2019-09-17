using Microsoft.VisualStudio.TestTools.UnitTesting;
using OkasakiList;
using System;
using Microsoft.FSharp.Core;

namespace OkasakiList.CSharp.Test
{

    [TestClass]
    public class TestClass
    {

        [TestMethod]
        public void ConstructsEmpty()
        {
            var expected = OkasakiList.Olist<int>.Empty;
            var actual = OkasakiList.empty<int>();

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void ConstructsSingleton()
        {
            var value = 12;
            var expected = OkasakiList.Olist<int>.NewValue(value, OkasakiList.Olist<int>.Empty);
            var actual = OkasakiList.singleton(value);

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void ConConsOntoAnEmptyList()
        {
            var value = "hello";
            var expected = OkasakiList.Olist<string>.NewValue(value, OkasakiList.Olist<string>.Empty);
            var actual = OkasakiList.cons(value, OkasakiList.empty<string>());

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void ConsConsOntoANonEmptyList()
        {
            var value1 = "hello";
            var value2 = "world";
            var tailNode = OkasakiList.singleton<string>(value2);

            var expected = OkasakiList.Olist<string>.NewValue(value1, tailNode);
            var actual = OkasakiList.cons(value1, tailNode);

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void HeadReturnsNullOnEmptyList()
        {
            int? expected = null;
            var emptyList = OkasakiList.empty<int>();
            var actual = OkasakiList.head<int>(emptyList);

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void HeadReturnsCorrectValueForSingleton()
        {
            var value = 12;

            var singletonList = OkasakiList.singleton(value);
            int? expected = value;
            var actual = OkasakiList.head(singletonList);

            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void HeadReturnsCorrectValueForList()
        {
            var value1 = 1;
            var value2 = 2;
            var value3 = 3;

            //we load up the list in reverse order, since basic cons inserts at the head
            var olist1 = OkasakiList.singleton(value3);
            var olist2 = OkasakiList.cons(value2, olist1);
            var olist3 = OkasakiList.cons(value1, olist2);

            var expected = value1;
            var actual = OkasakiList.head(olist3);

            Assert.AreEqual(expected, actual);
        }

        //C# can't call F# functions that accept functions, like fold.
    }
}
