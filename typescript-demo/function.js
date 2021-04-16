function myAdd1(x, y) {
    return x + y;
}
var myAdd2 = function (x, y) {
    return x + y;
};
// 完整函数类型
var myAdd3 = function (x, y) {
    return x + y;
};
// 赋值语句的一边指定了类型但是另一边没有类型的话 TypeScript编译器会自动识别出类型 是一种类型推论
// 可选参数和默认参数
// 1.?可选参数必须跟在必须参数后面。
// 在所有必须参数后面的带默认初始化的参数都是可选的
// 也就是说可选参数与末尾的默认参数共享参数类型。
function buildName1(firstName, lastName) {
    // ...
}
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    // ...
}
// 共享同样的类型 (firstName: string, lastName?: string) => string
// 2.默认参数不需要放到后面。明确的传入undefined值来获得默认值
function buildName3(firstName, lastName) {
    if (firstName === void 0) { firstName = "Will"; }
    return firstName + " " + lastName;
}
// buildName3("222");
// buildName3("111","222","333");
buildName3("111", "222");
buildName3(undefined, "222");
// 3.剩余参数
function buildName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + restOfName.join("");
}
// 类型定义
var buildName4Fun = buildName4;
console.log(buildName4Fun("Bill", "Gates", "Aliy"));
