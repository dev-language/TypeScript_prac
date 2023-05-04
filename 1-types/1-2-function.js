"use strict";
exports.__esModule = true;
{
    // Javascript 💩
    function jsAdd(num1, num2) {
        return num1 + num2;
    }
    // Typescript ✨
    function tsAdd(num1, num2) {
        return num1 + num2;
    }
    // Javascript 💩
    function jsFetchNum(id) {
        // code ...
        // code ...
        return new Promise(function (resolve, reject) {
            resolve((id += 100));
        });
    }
    jsFetchNum(200).then(function (num) { return console.log('jsFetchNum --->', num); });
    // Typescript ✨
    function tsFetchNum(id) {
        // code ...
        // code ...
        return new Promise(function (resolve, reject) {
            resolve((id += 100));
        });
    }
    tsFetchNum(123).then(function (num) { return console.log('tsFetchNum --->', num); });
    // Javascript ✨ => Typescript
    // Optional parameter - 전달해도 되고, 전달하지 않아도 되는 것을 옵셔널 '?' 파라미터로 처리
    var printName = function (firstName, lastName) {
        console.log('printName firstName --->', firstName);
        console.log('printName lastName --->', lastName);
    };
    /* printName('서근') */ // error: 2개의 인수가 필요한데 1개를 가져왔습니다. --> 옵셔널 파라미터로 해결
    /* printName('서근', 0); */ //number' 형식의 인수는 'string ' 형식의 매개 변수에 할당될 수 없습니다.
    printName('서근');
}
