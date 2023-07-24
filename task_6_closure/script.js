{
    let n = 10;
    let l = 1; //2 //3 //4
    function outer(n) {
        let x = 1;
        return function (y) { l++; return n + y + x + l}
    }

    function getL(){
        return l;
    }
}
console.log("L = " + getL())
func = outer(2)
console.log(func(1))
console.log(func(2))
console.log(func(2))
console.log("L = " + getL())

func2 = outer(2)
console.log(func2(1))
console.log(func2(1))
console.log(func2(4))
console.log("L = " + getL())

