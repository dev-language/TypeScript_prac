{
  /**
   * 타입 추론 (Type Inference)
   */

  let num = 10; // num은 number 타입으로 추론됨
  let str = "Hello"; // str은 string 타입으로 추론됨
  let bool = true; // bool은 boolean 타입으로 추론됨

  let arr = [1, 2, 3]; // arr은 number[] (number 배열) 타입으로 추론됨
  let obj = { name: "John", age: 30 }; // obj는 { name: string, age: number } 타입으로 추론됨

  function add(a: number, b: number) {
    return a + b;
  }
  let result = add(5, 3); // result는 number 타입으로 추론됨

  function greet(name = "선중") {
    console.log("Hello, " + name);
  }
  greet("Alice"); // name 매개변수는 string 타입으로 추론됨
}
