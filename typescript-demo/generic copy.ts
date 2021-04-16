

interface R{
  length:number
}

function fn1<S extends R>(arg:S):void{
  console.log(arg.length);
} 
