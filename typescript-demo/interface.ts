// #接口
// TypeScript的核心原则之一是对值所具有的结构进行类型检查。
// 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约

// 1
interface labelObj {
  name: string;
  desc?: string; // 可选属性
  readonly gender: string;
}

function printLabel(labelObj: labelObj) {
  console.log(labelObj.name);
  if (labelObj.desc) {
    console.log(labelObj.desc);
  }
  // labelObj.gender = "female";
}

let labelObj = {
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
} as labelObj); // 类型断言绕过

// 2.描述函数类型
interface SearchFun {
  (start: string, end: string): boolean;
}

let mySearch: SearchFun = function(st, en) {
  return true;
};

// 3.描述可索引的类型
// TypeScript支持两种索引签名：字符串和数字
interface StringArray {
  [x: number]: string;
}
let stringArray: StringArray = ["tom", "bob"];

// 应用场景dictionary模式
interface NameDictionary {
  [x: string]: string;
  mid: string;
  //'last':number
}
let name2: NameDictionary = {
  // first : 2,
  mid: "Jonh",
  last: "Bill"
};

// 4.类类型
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: string, m: string){};
}
let clock:Clock = new Clock("3","33");
console.log(clock);


// 继承接口
interface Shape {
  color: string;
}
interface Square extends Shape {
  side: number;
}
let square: Square = <Square>{};
square.color = "red";
square.side = 10;
