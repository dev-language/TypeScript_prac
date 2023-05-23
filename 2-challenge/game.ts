{
  /**
   * 내가 만든 코드 : 각각 retrun 하는것보다 마지막에 return 하는것도 좋다. 또, break 작성이 되지 않아, 아래 코드가 전부 실행 될 수 있다.
   */

  /*
  type Location = "up" | "down" | "left" | "right";

  function move(location: Location) {
    switch (location) {
      case "up":
        return position.y++;
      case "down":
        return position.y--;
      case "left":
        return position.x--;
      case "right":
        return position.x++;

      default:
        throw new Error("유효 하지 않은 위치 입니다.");
    }
  }

  const position = { x: 0, y: 0 };
  console.log(position); // { x: 0, y: 0}
  move("up");
  console.log(position); // { x: 0, y: 1}
  move("down");
  console.log(position); // { x: 0, y: 0}
  move("left");
  console.log(position); // { x: -1, y: 0}
  move("right");
  console.log(position); // { x: 0, y: 0}
  */

  /**
   * 더 좋은 코드 : Position 또한  유니온 타입으로 지정해주는것이 좋다.
   */

  type Location = "up" | "down" | "left" | "right";
  type Position = { x: number; y: number };
  const position: Position = { x: 0, y: 0 };

  function move(location: Location) {
    switch (location) {
      case "up":
        position.y++;
        break;
      case "down":
        position.y--;
        break;
      case "left":
        position.x--;
        break;
      case "right":
        position.x++;
        break;
      default:
        throw new Error(`unknown Direction: ${location}`);
    }

    return position;
  }

  console.log(position); // { x: 0, y: 0}
  move("up");
  console.log(position); // { x: 0, y: 1}
  move("down");
  console.log(position); // { x: 0, y: 0}
  move("left");
  console.log(position); // { x: -1, y: 0}
  move("right");
  console.log(position); // { x: 0, y: 0}
}
