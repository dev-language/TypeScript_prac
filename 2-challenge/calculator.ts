{
  /**
   *  내가 만든 코드 : 유니온 타입 없이 바로 해버림
   */

  /*
  function calculate(type: string, num1: number, num2: number): number {
    switch (type) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        return num1 / num2;
      case "remainder":
        return num1 % num2;
      default:
        throw new Error("계산을 할 수 없습니다.");
    }
  } */

  /**
   *  더 좋은 코드 : 유니온 타입을 활용해 타입 안정성 보장
   */

  type CalcType = "add" | "subtract" | "multiply" | "divide" | "remainder";
  function calculate(type: CalcType, num1: number, num2: number): number {
    switch (type) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        return num1 / num2;
      case "remainder":
        return num1 % num2;
      default:
        throw new Error("계산을 할 수 없습니다.");
    }
  }

  console.log(calculate("add", 1, 3)); // 4
  console.log(calculate("subtract", 3, 1)); // 2
  console.log(calculate("multiply", 4, 2)); // 8
  console.log(calculate("divide", 4, 2)); // 2
  console.log(calculate("remainder", 5, 2)); // 1
}
