{
    var Effect = /** @class */ (function () {
        function Effect() {
            this.q = "attack";
            this.w = "forword";
        }
        Effect.prototype.edit = function (newQ, newW) {
            this.q = newQ;
            this.w = newW;
        };
        return Effect;
    }());
    var nunu = new Effect();
    nunu.q = "공격!";
    nunu.w = "앞으로!";
    console.log("nunu --->", nunu);
    nunu.edit("마법 공격!", "앞으로 점프");
    console.log("nunu --->", nunu);
    /* =======  ======= */
    var Car = /** @class */ (function () {
        function Car(carName, price) {
            this.carName = carName;
            this.price = price;
        }
        Car.prototype.tax = function () {
            return this.price * 0.1;
        };
        return Car;
    }());
    var car1 = new Car("소나타", 3000);
    console.log("car1 --->", car1);
    console.log("car1.tax() --->", car1.tax());
    /* =======  ======= */
    var Word = /** @class */ (function () {
        function Word() {
            var n = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                n[_i] = arguments[_i];
            }
            var _this = this;
            this.num = [];
            this.str = [];
            n.forEach(function (item) {
                if (typeof item === "string") {
                    _this.str.push(item);
                }
                else {
                    _this.num.push(item);
                }
            });
        }
        return Word;
    }());
    var obj = new Word("kim", 3, 5, "park");
    console.log(obj.num); //[3,5]
    console.log(obj.str); //['kim', 'park']
}
