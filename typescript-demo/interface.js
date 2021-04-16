// #接口
// TypeScript的核心原则之一是对值所具有的结构进行类型检查。
// 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
function printLabel(labelObj) {
    console.log(labelObj.name);
    if (labelObj.desc) {
        console.log(labelObj.desc);
    }
    // labelObj.gender = "female";
}
var labelObj = {
    id: 33,
    name: "testLabel",
    gender: "male"
};
printLabel(labelObj);
// 对象字面量会被特殊对待而且会经过 “额外属性检查”，当将它们赋值给变量或作为参数传递的时候。
printLabel({
    id: 31,
    name: "testLabel2",
    gender: "male"
}); // 类型断言绕过
var mySearch = function (st, en) {
    return true;
};
var stringArray = ["tom", "bob"];
var name2 = {
    // first : 2,
    mid: "Jonh",
    last: "Bill"
};
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    ;
    return Clock;
}());
var clock = new Clock("3", "33");
console.log(clock);
var square = {};
square.color = "red";
square.side = 10;
