let calculatorModule = (function () {
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
})();
calculatorModule.display();
calculatorModule.add(5);
calculatorModule.display();
calculatorModule.subtract(3);
calculatorModule.display();