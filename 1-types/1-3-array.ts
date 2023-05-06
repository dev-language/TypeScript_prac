{
  /**
   * Array
   */

  /*
  string[]: 배열의 요소가 문자열(string) 타입으로 이루어져 있다는 것을 정의한다.

  Array<string>
  타입스크립트의 제네릭(generics) 문법을 활용한 방법으로, 배열의 요소가 문자열(string) 타입으로 이루어져 있다는 것을 정의한다.
  제네릭은 타입스크립트에서 함수, 클래스, 인터페이스 등에서 재사용 가능한 코드를 작성하는 방법 중 하나로, 타입을 인자로 받아 다양한 타입의 값에 대해 동작하는 코드를 작성할 수 있다.

  string[]와 Array<string>는 의미상으로는 동일하지만, string[]는 배열 타입을 정의하는 특화된 문법이기 때문에 가독성이 높아 코드를 읽기 쉽다.
  또한, Array 타입을 사용할 경우 다른 프로그래밍 언어와의 호환성을 고려할 때 불필요한 복잡성을 만들 수 있다.
  따라서 보편적으로는 string[]와 같은 배열 타입을 정의할 때에는 Array 타입 대신에 해당 문법을 사용하는 것이 권장된다.
  */
  const fruits: string[] = ['사과', '바나나'];
  const scroes: Array<number> = [1, 2, 3];

  fruits.push('딸기');
  scroes.push(5);

  console.log('fruits: string[] --->', fruits);
  console.log('scroes: Array<number> --->', scroes);

  const readOnlyObject1: readonly string[] = ['선중', '미진'];
  const readOnlyObject2: ReadonlyArray<string> = ['희진', '서근'];
  // concat 메서드는 새로운 배열을 반환하므로, readOnlyObject1과 readOnlyObject2에 영향을 주지 않아 사용 가능하다.
  const newArray: string[] = readOnlyObject1.concat(['동혁']);

  function readOnlyFunc(fruits: string[]) {
    console.log('readOnlyFunc --->', fruits);
  }
  readOnlyFunc(['🍓', '🍌']);

  /* readOnlyObject1.push('불가능'); */ //Property 'push' does not exist on type 'readonly string[]'
  console.log('readonly string[] --->', readOnlyObject1);
  console.log('ReadonlyArray<string> --->', readOnlyObject2);
  console.log('newArray --->', newArray);

  // Tuple -> 튜플 대신 interface, type alias, class 를 사용하자

  /*
  튜플(Tuple)은 배열과 비슷하지만, 각 요소의 타입을 정확하게 지정하고 순서를 유지하는 고정된 길이의 배열이다.
  하지만 튜플은 가독성이 떨어지므로 타입스크립트에서 사용하는것을 추천하지 않는다.
  */

  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; //123

  type Person = [string, number];

  const person1: Person = ['홍길동', 30]; // 올바른 튜플 정의
  /* const person2: Person = [25, '김철수']; */ // 에러 발생: 타입 및 순서가 올바르지 않음

  // 튜플에 정의된 요소에 접근
  const name: string = person1[0]; // '홍길동'
  const age: number = person1[1]; // 30
}
