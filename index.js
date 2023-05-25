{
    var array = ["안녕", "하세요"];
    var obj = { name: "선중", age: 1 };
    var favoritSinger = {
        name: "오웬",
        title: "그대로"
    };
    console.log(favoritSinger);
    var project = {
        member: ["kim", "park"],
        days: 30,
        started: true
    };
    var user = [1, "2", 3];
    var object = {
        name: "안녕",
        isTrue: true
    };
    var users = "kim";
    var age = undefined;
    var married = false;
    var 철수 = [users, age, married];
    /* =======  ======= */
    var 학교 = {
        score: [100, 97, 84],
        teacher: "Phil",
        friend: "John"
    };
    학교.score[4] = false;
    학교.friend = ["Lee", 학교.teacher];
    /* =======  ======= */
    var calc = function (n) {
        if (typeof n === "number") {
            return console.log(n * 2);
        }
        else {
            throw new Error("숫자가 아닙니다.");
        }
    };
    /* =======  ======= */
    var greeting = function (name) {
        var result;
        if (name) {
            result = console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name));
        }
        else {
            result = console.log("이름이 없습니다.");
        }
        return result;
    };
    greeting("김선중");
    /* =======  ======= */
    var countLength = function (n) { return n.toString().length; };
    var canMarried = function (_a) {
        var pay = _a.pay, hasHome = _a.hasHome, charm = _a.charm;
        var score = ~~(pay / 10000);
        if (hasHome)
            score += 500;
        if (charm === "상")
            score += 100;
        return score >= 600 ? "결혼 가능" : "결혼 불가능";
    };
    console.log(canMarried({ pay: 20000, hasHome: true, charm: "상" }));
    console.log(canMarried({ pay: 10000, hasHome: false, charm: "하" }));
    /* =======  ======= */
    var conversionArray = function (arr) {
        var convertedArr = arr.map(function (i) {
            if (typeof i === "string") {
                return Number(i);
            }
            else {
                return i;
            }
        });
        return convertedArr;
    };
    console.log(conversionArray([1, "2", 3]));
    var lastSubject = function (subject) {
        var subjects = subject.subject;
        if (typeof subjects === "string") {
            return subjects;
        }
        else if (Array.isArray(subjects)) {
            return subjects[subjects.length - 1];
        }
        else {
            throw new Error("유효한 키값이 아닙니다.");
        }
    };
    console.log(lastSubject({ subject: "math" }));
    console.log(lastSubject({ subject: ["science", "art", "korean"] }));
    var myType = { size: 20, position: [1, 2] };
    console.log(myType);
    var info = {
        name: "김선중",
        phone: 82107753576,
        email: "ksj",
        isAdult: true
    };
    console.log("info --->", info);
    var game = function (go) { return [go]; };
    console.log(game("가위"));
    var myFunction = function (a) { return a; };
    console.log(myFunction("ㅎㅇ"));
    var cutZero = function (n) {
        if (n[0] === "0") {
            return n.substring(1);
        }
        else {
            return n;
        }
    };
    console.log(" --->", cutZero("01"));
    var removeDash = function (n) {
        var result = n.replace(/-/g, "");
        return parseFloat(result);
    };
    console.log("removeDash --->", removeDash("+82-10-7743-4562"));
    var 만들함수 = function (num, func1, func2) {
        var cutZero = func1(num);
        var removeDash = func2(cutZero);
        return removeDash;
    };
    console.log(만들함수("010-1111-2222", cutZero, removeDash));
    /* =======  ======= */
    // let changeButton = document.querySelector("#button");
    // if (changeButton instanceof HTMLButtonElement) {
    //   changeButton.addEventListener("click", function (event) {
    //     alert("Hello world");
    //   });
    // }
    // let changeImg = document.querySelector("#image");
    // if (changeImg instanceof HTMLImageElement) {
    //   changeImg.src = "https://wepick.kr/wp-content/uploads/2022/08/image-21.png";
    // }
    // let changeAnchor = document.querySelectorAll(".naver");
    // changeAnchor.forEach((element) => {
    //   if (element instanceof HTMLAnchorElement) {
    //     element.href = "google.com";
    //   }
    // });
}
