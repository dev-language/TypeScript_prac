{
    /**
     * 타입 추론 (Type Inference)
     */
    var num = 10; // num은 number 타입으로 추론됨
    var str = "Hello"; // str은 string 타입으로 추론됨
    var bool = true; // bool은 boolean 타입으로 추론됨
    var arr = [1, 2, 3]; // arr은 number[] (number 배열) 타입으로 추론됨
    var obj = { name: "John", age: 30 }; // obj는 { name: string, age: number } 타입으로 추론됨
    function add(a, b) {
        return a + b;
    }
    var result = add(5, 3); // result는 number 타입으로 추론됨
    function greet(name) {
        if (name === void 0) { name = "선중"; }
        console.log("Hello, " + name);
    }
    greet("Alice"); // name 매개변수는 string 타입으로 추론됨
}
