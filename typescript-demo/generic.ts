// #泛型

// 背景
// 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。
// 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

// 可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。
// 这样用户就可以以自己的数据类型来使用组件

// ###类型变量T
// (类型变量,它是一种特殊的变量，只用于表示类型而不是值。)

function identidy<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

identidy(["d"]);

// 泛型函数identidy，接收类型参数T和参数arg，它是个元素类型是T的数组，并返回元素类型是T的数组。
// 这可以让我们把泛型变量T当做类型的一部分使用，而不是整个类型，增加了灵活性。

// ###泛型函数
let myIdentidy1: <U>(arg: Array<U>) => Array<U> = identidy;
let myIdentidy2: {
  <U>(arg: Array<U>): Array<U>;
} = identidy;

interface myIdentidyFn {
  // 描述函数为泛型
  <U>(arg: Array<U>): Array<U>;
}
let myIdentidy3: myIdentidyFn = identidy;

// ###泛型接口
interface myIdentidyFn2<U> {
  // 描述接口为泛型
  (arg: Array<U>): Array<U>;
}
let myIdentidy4: myIdentidyFn2<string> = identidy;

// ###泛型约束
interface R{
    length : number;
}
function identidy2<S extends R>(arg: S): void {
    console.log(arg.length);
}
identidy2({length:2});
