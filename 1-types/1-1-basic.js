{
    /**
     * JavaScript
     * Primitive(원시): number, string, boolean, bigint, symbol, null, undefined
     * Object(객체): function, array...
     */
    // number
    var num = 1;
    // string
    var str = 'hello';
    // boolean
    var boal = false;
    // undefined
    var name_1; // 💩
    var age = //옵셔널 타입일때 사용 가능
     void 0; //옵셔널 타입일때 사용 가능
    age = undefined;
    age = 1;
    function find() {
        return undefined;
    }
    // null
    var person = // 💩
     void 0; // 💩
    var person2 = // 보편적으로 null 보다는 undifined를 많이 사용한다.
     void 0; // 보편적으로 null 보다는 undifined를 많이 사용한다.
    // unknown - 어떤 종류의 타입이 담길지 모름. 가능하면 싸지 말자 💩
    var notSure = 0;
    notSure = 'seogun';
    notSure = true;
    // any - 어떤 종류든 담길 수 있음. 가능하면 쓰지 말자 💩
    var anything = 0;
    anything = '서근';
    anything = true;
    // void - 아무것도 return 하지 않을 때 사용
    function print() {
        console.log('hello');
        return;
    }
    // never - 절대 return 하지 않는다.
    function throwError(message) {
        // message -> server (log)
        throw new Error(message);
        while (true) { }
        /* return */ // error
    }
    // object - 원시 타입을 제외한 모든 object 타입을 담을 수 있다.
    var obj = // 💩
     void 0; // 💩
    function acceptSomeObject(obj) {
        console.log('obj --->', Object.values(obj));
    }
    acceptSomeObject({ name: 'seogun' });
    acceptSomeObject({ animal: '강아지' });
}
