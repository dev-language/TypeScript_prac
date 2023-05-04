import { log } from 'console';

{
  // Javascript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // Typescript ✨
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Javascript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve((id += 100));
    });
  }
  jsFetchNum(200).then(num => console.log('jsFetchNum --->', num));

  // Typescript ✨
  function tsFetchNum(id: number): Promise<number> {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve((id += 100));
    });
  }

  tsFetchNum(123).then(num => console.log('tsFetchNum --->', num));

  // Javascript ✨ => Typescript
  // Optional parameter - 전달해도 되고, 전달하지 않아도 되는 것을 옵셔널 '?' 파라미터로 처리
  const printName = (firstName: string, lastName?: string) => {
    console.log('printName firstName --->', firstName);
    console.log('printName lastName --->', lastName);
  };

  /* printName('서근') */ // error: 2개의 인수가 필요한데 1개를 가져왔습니다. --> 옵셔널 파라미터로 해결
  /* printName('서근', 0); */ //number' 형식의 인수는 'string ' 형식의 매개 변수에 할당될 수 없습니다.

  printName('서근');
}
