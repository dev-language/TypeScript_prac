{
    var restFunc = function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        console.log(n);
    };
    restFunc(1, 2, 3, 4, 5);
    var _a = { name: "", age: 28 }, name_1 = _a.name, age = _a.age;
    function destructuring(_a) {
        var name = _a.name, age = _a.age;
        console.log(name, age);
    }
    destructuring({ name: "미진", age: age });
    /* =======  ======= */
    var maxInt = function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        var fillterNumber = n.filter(function (num) { return num > 0 && Number.isInteger(num); });
        if (fillterNumber.length > 0) {
            return Math.max.apply(Math, fillterNumber);
        }
        else {
            throw new Error("0이상의 정수만 입력해주세요");
        }
    };
    console.log(maxInt(1, 2, 5));
    var myObjFunc = function (_a) {
        var user = _a.user, comment = _a.comment, admin = _a.admin;
        console.log(user, comment, admin);
    };
    myObjFunc({ user: "kim", comment: [3, 5, 4], admin: false });
    var myFunc = function (_a) {
        var n = _a.slice(0);
        return n;
    };
    console.log(myFunc([40, "선중", false]));
}
