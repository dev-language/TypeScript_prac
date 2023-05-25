{
    var myDog = { name: "넷째", makeSound: "왈왈" };
    console.log("myDog --->", myDog);
    var School = {
        name: "선중",
        age: 28,
        phone: 820100100
    };
    console.log("School --->", School);
    var product = {
        brand: "Samsung",
        serialNumber: 1360,
        model: ["TV", "phone"]
    };
    var 장바구니 = [
        { product: "청소기", price: 7000 },
        { product: "삼다수", price: 800 },
    ];
    var 지갑 = { product: "마우스", price: 20000, card: true };
    var Calc = /** @class */ (function () {
        function Calc() {
        }
        Calc.prototype.plus = function (a, b) {
            return a + b;
        };
        Calc.prototype.minus = function (a, b) {
            return a - b;
        };
        return Calc;
    }());
    var newCalc = {
        plus: function (a, b) {
            return a + b;
        },
        minus: function (a, b) {
            return a - b;
        }
    };
    console.log("obj--->", newCalc.plus(1, 5));
    var calc = new Calc().plus(2, 3);
    console.log("calc --->", calc);
}
