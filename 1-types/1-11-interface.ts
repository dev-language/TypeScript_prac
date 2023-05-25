{
  /**
 * ✨ 상속 ✨ *
* extends는 일반 클래스와 abstract 클래스 상속에 사용하고,
* implement는 interface 상속에 사용된다.

* class가 class를 상속받을 땐 extends를 사용하고,
* interface가 interface를 상속 받을 땐 extends를 사용한다.

* class가 interface를 사용할 땐 implements를 써야하고,
* interface가 class를 사용할 땐 implements를 쓸수 없다.

* extends는 클래스 한 개만 상속 받을 수 있다.
* extends 자식 클래스는 부모 클래스의 기능을 사용한다.

* implements는 여러개 사용 가능하다.
* implements는 설계 목적으로 구현 가능하다.
* implements한 클래스는 implements의 내용을 전부 사용해야 한다.
*/

  /* ======= Type ======= */
  /**
   * ✨ Type: 중복 선언 불가능 (업격 모드)
   * type User = {};
   * type User = {}; //불가능
   * - & 기호로 상속할때 중복 속성이 발생시 에러를 잡아주지 않는다.
   */

  type Animal = { name: string };
  type Dog = { makeSound: string } & Animal;

  const myDog: Dog = { name: "넷째", makeSound: "왈왈" };
  console.log("myDog --->", myDog);

  /* =======  Interfase ======= */
  /**
   * ✨ Interface: 중복 선언 가능 (중복 된 객체 병합)
   * - interface User {};
   * - interface User {} //가능
   * 장점 : 외부 라이브러리같은 경우 interface를 많이 쓴다. (속성 추가 및 수정 가능)
   * - 다른 사람이 많이  이용할 것 같으면 object를 Interface로 지정해도 좋음
   * - extends시 중복 객체값이 있으면 에러가 발생한다.
   */

  interface Student {
    name: string;
    age: number;
  }

  interface Teacher extends Student {
    phone: number;
  }

  const School: Teacher = {
    name: "선중",
    age: 28,
    phone: 820100100,
  };
  console.log("School --->", School);

  interface Products {
    brand: string;
    serialNumber: number;
    model: string[];
  }
  let product: Products = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
  };

  interface Cart {
    product: string;
    price: number;
  }
  let 장바구니: Cart[] = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
  ];

  interface Card extends Cart {
    card: boolean;
  }
  let 지갑: Card = { product: "마우스", price: 20000, card: true };

  interface Param {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
  }
  class Calc implements Param {
    plus(a: number, b: number) {
      return a + b;
    }
    minus(a: number, b: number) {
      return a - b;
    }
  }

  let newCalc: Param = {
    plus(a, b) {
      return a + b;
    },
    minus(a, b) {
      return a - b;
    },
  };

  console.log("obj--->", newCalc.plus(1, 5));

  let calc = new Calc().plus(2, 3);
  console.log("calc --->", calc);
}
