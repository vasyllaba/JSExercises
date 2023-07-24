function calculator() {
    let data = 0;

    return {
        display: function () {
            console.log(data);
        },
        add: function (n) {
            data += n;
        },
        subtract: function (n) {
            data -= n;
        }
    }
}

let superCalculator = calculator();
superCalculator.display();
superCalculator.add(5);
superCalculator.display();
superCalculator.subtract(3);
superCalculator.display();