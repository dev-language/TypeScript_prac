{
  /**
   * JavaScript
   * Primitive(원시): number, string, boolean, bigint, symbol, null, undefined
   * Object(객체): function, array...
   */

  // number
  const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined 💩
  let name: undefined; // 💩
  let age: number | undefined; //옵셔널 타입일때 사용 가능
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null 💩
  let person: null; // 💩
  let person2: string | null; // 보편적으로 null 보다는 undifined를 많이 사용한다.

  // unknown - 어떤 종류의 타입이 담길지 모름. 가능하면 싸지 말자 💩
  let notSure: unknown = 0;
  notSure = "seogun";
  notSure = true;

  // any - 어떤 종류든 담길 수 있음. 가능하면 쓰지 말자 💩
  let anything: any = 0;
  anything = "서근";
  anything = true;

  // void - 아무것도 return 하지 않을 때 사용
  function print(): void {
    console.log("hello");
    return;
  }

  // never - 절대 return 하지 않는다.
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
    /* return */ // error
  }

  // object - 원시 타입을 제외한 모든 object 타입을 담을 수 있다.
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {
    console.log("obj --->", Object.values(obj));
  }

  acceptSomeObject({ name: "seogun" });
  acceptSomeObject({ animal: "강아지" });
}
