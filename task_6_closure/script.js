{
    let n = 10;
    let z = 1; //2 //3 //4
    function outer(n) {
        let x = 1;
        return function (y) { z++; return n + y + x + z}
    }


}
func = outer(2)
console.log(func(1))
console.log(func(2))
console.log(func(2))

func2 = outer(2)
console.log(func2(1))
console.log(func2(1))
console.log(func2(4))
