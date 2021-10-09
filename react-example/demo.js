var a = {
    d: 1,
    fun: function () {
        console.log(this.d);
    }
};
var c = {
    d: 2
};

console.log(a.fun());
c.fun = a.fun;
console.log(c.fun());
