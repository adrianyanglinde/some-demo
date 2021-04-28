
/**函数 */
function myAdd1(x: number, y: number): number {
  return x + y;
}

/**函数表达式 */
// 赋值语句的一边指定了类型但是另一边没有类型的话 TypeScript编译器会自动识别出类型 是一种类型推论
let myAdd2 = function(x: number, y: number): number {
  return x + y;
};
let myAdd22: (first: number, second: number) => number = function(x, y) {
  return x + y;
};

// 完整函数类型   其中类型：(first: number, second: number) => number
let myAdd3: (first: number, second: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};

// 也可以这样写  其中类型调用带有函数签名的对象字面量来定义 { (f: number, s: number): number }
let myAdd4: { (f: number, s: number): number } = function(
  ff: number,
  ss: number
) {
  return ff + ss;
};









// 可选参数和默认参数

// 1.?可选参数必须跟在必须参数后面。

// 在所有必须参数后面的带默认初始化的参数都是可选的
// 也就是说可选参数与末尾的默认参数共享参数类型。
function buildName1(firstName: string, lastName?: string) {
  // ...
}
function buildName2(firstName: string, lastName = "Smith") {
  // ...
}
// 共享同样的类型 (firstName: string, lastName?: string) => string

// 2.默认参数不需要放到后面。明确的传入undefined值来获得默认值
function buildName3(firstName = "Will", lastName: string) {
  return firstName + " " + lastName;
}
// buildName3("222");
// buildName3("111","222","333");
buildName3("111", "222");
buildName3(undefined, "222");

// 3.剩余参数
function buildName4(firstName: string, ...restOfName: string[]) {
  return firstName + restOfName.join("");
}

// 类型定义
let buildName4Fun: (first: string, ...rest: string[]) => string = buildName4;
console.log(buildName4Fun("Bill", "Gates", "Aliy"));
