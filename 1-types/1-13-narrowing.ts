{
  /**
   * narrowing
   * - null & undefined 타입체크하는 경우가 매우 잦다.
   * - 그렇기 때문에 narrowing이 필수적이다.
   */

  /* ======= 첫 번째 방법 : typeof로 narrowing ======= */
  const myFunc1 = (a: string | undefined | null) => {
    if (typeof a === "string") {
      return a;
    } else {
      throw new Error(
        `타입이 null 또는 undefined 입니다. 인자값 타입:${typeof a}`
      );
    }
  };

  /* ======= 두 번째 방법 : && 연산자로 null & undefined 타입 체크 ======= */
  const myFunc2 = (a: string | undefined) => {
    if (a && typeof a === "string") {
      //a에 undefined가 할당되면 조건문 실행 안됨.
      return a;
    } else {
      throw new Error(
        `타입이 null 또는 undefined 입니다. 인자값 타입:${typeof a}`
      );
    }
  };

  /* ======= 세 번째 방법 : in 키워드로 object narrowing ======= */

  type Fish = { swim: string };
  type Brid = { fly: string };

  const myFunc3 = (animal: Fish | Brid) => {
    if ("swim" in animal) {
      return animal.swim;
    } else {
      return animal.fly;
    }
  };
  console.log(myFunc3({ swim: "헤엄친다" }));

  /* ======= 네 번째 방법 : literal type으로 object narrowing ======= */

  type Flower = {
    name: "장미";
    color: "red" | string;
  };

  interface Desk {
    name: "책상";
    color: string;
  }

  const myFunc4 = (text: Flower | Desk) => {
    if (text.name === "장미") {
      return console.log(`${text.name}의 색깔은 ${text.color} 입니다.`);
    } else {
      return console.log(`${text.name}의 색깔은 ${text.color} 입니다.`);
    }
  };

  myFunc4({ name: "장미", color: "pink" });
  myFunc4({ name: "책상", color: "brown" });

  /* ======= 다섯 번째 방법 : instanceof 연산자로 object narrowing ======= */
  class Car {
    brand: string;
    constructor(brand: string) {
      this.brand = brand;
    }
    startEngine() {
      return console.log(`${this.brand}가 시동을 겁니다.`);
    }
  }

  class Bike {
    brand: string;
    constructor(brand: string) {
      this.brand = brand;
    }
    newProduct() {
      return console.log(`${this.brand}사의 자전거가 출시했습니다.`);
    }
  }

  const myFunc5 = (brand: Car | Bike) => {
    if (brand instanceof Car) {
      return brand.startEngine();
    } else if (brand instanceof Bike) {
      return brand.newProduct();
    } else {
      throw new Error("존재하지 않는 클래스 입니다.");
    }
  };
  let kia = new Car("기아");
  myFunc5(kia);
  let samchully = new Bike("삼천리 자전거");
  myFunc5(samchully);
}
