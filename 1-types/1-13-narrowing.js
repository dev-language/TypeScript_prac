{
    /**
     * narrowing
     * - null & undefined 타입체크하는 경우가 매우 잦다.
     * - 그렇기 때문에 narrowing이 필수적이다.
     */
    /* ======= 첫 번째 방법 : typeof로 narrowing ======= */
    var myFunc1 = function (a) {
        if (typeof a === "string") {
            return a;
        }
        else {
            throw new Error("\uD0C0\uC785\uC774 null \uB610\uB294 undefined \uC785\uB2C8\uB2E4. \uC778\uC790\uAC12 \uD0C0\uC785:".concat(typeof a));
        }
    };
    /* ======= 두 번째 방법 : && 연산자로 null & undefined 타입 체크 ======= */
    var myFunc2 = function (a) {
        if (a && typeof a === "string") {
            //a에 undefined가 할당되면 조건문 실행 안됨.
            return a;
        }
        else {
            throw new Error("\uD0C0\uC785\uC774 null \uB610\uB294 undefined \uC785\uB2C8\uB2E4. \uC778\uC790\uAC12 \uD0C0\uC785:".concat(typeof a));
        }
    };
    var myFunc3 = function (animal) {
        if ("swim" in animal) {
            return animal.swim;
        }
        else {
            return animal.fly;
        }
    };
    console.log(myFunc3({ swim: "헤엄친다" }));
    var myFunc4 = function (text) {
        if (text.name === "장미") {
            return console.log("".concat(text.name, "\uC758 \uC0C9\uAE54\uC740 ").concat(text.color, " \uC785\uB2C8\uB2E4."));
        }
        else {
            return console.log("".concat(text.name, "\uC758 \uC0C9\uAE54\uC740 ").concat(text.color, " \uC785\uB2C8\uB2E4."));
        }
    };
    myFunc4({ name: "장미", color: "pink" });
    myFunc4({ name: "책상", color: "brown" });
    /* ======= 다섯 번째 방법 : instanceof 연산자로 object narrowing ======= */
    var Car_1 = /** @class */ (function () {
        function Car(brand) {
            this.brand = brand;
        }
        Car.prototype.startEngine = function () {
            return console.log("".concat(this.brand, "\uAC00 \uC2DC\uB3D9\uC744 \uAC81\uB2C8\uB2E4."));
        };
        return Car;
    }());
    var Bike_1 = /** @class */ (function () {
        function Bike(brand) {
            this.brand = brand;
        }
        Bike.prototype.newProduct = function () {
            return console.log("".concat(this.brand, "\uC0AC\uC758 \uC790\uC804\uAC70\uAC00 \uCD9C\uC2DC\uD588\uC2B5\uB2C8\uB2E4."));
        };
        return Bike;
    }());
    var myFunc5 = function (brand) {
        if (brand instanceof Car_1) {
            return brand.startEngine();
        }
        else if (brand instanceof Bike_1) {
            return brand.newProduct();
        }
        else {
            throw new Error("존재하지 않는 클래스 입니다.");
        }
    };
    var kia = new Car_1("기아");
    myFunc5(kia);
    var samchully = new Bike_1("삼천리 자전거");
    myFunc5(samchully);
}
