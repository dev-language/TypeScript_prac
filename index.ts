{
  type Arr = Array<string>;
  let array: Arr = ["안녕", "하세요"];

  type Obj = { [key: string]: string | number };
  let obj: Obj = { name: "선중", age: 1 };

  const favoritSinger: { name: string; title: string } = {
    name: "오웬",
    title: "그대로",
  };
  console.log(favoritSinger);

  let project: { member: Array<string>; days: number; started: boolean } = {
    member: ["kim", "park"],
    days: 30,
    started: true,
  };

  let user: Array<string | number> = [1, "2", 3];
  let object: { [key: string]: string | boolean } = {
    name: "안녕",
    isTrue: true,
  };

  let users: string = "kim";
  let age: undefined | number = undefined;
  let married: boolean = false;
  let 철수: (string | number | undefined | boolean)[] = [users, age, married];

  /* =======  ======= */

  let 학교: {
    score: (number | boolean)[];
    teacher: string;
    friend: string | string[];
  } = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
  };
  학교.score[4] = false;
  학교.friend = ["Lee", 학교.teacher];

  /* =======  ======= */

  const calc = (n: number | string): void => {
    if (typeof n === "number") {
      return console.log(n * 2);
    } else {
      throw new Error("숫자가 아닙니다.");
    }
  };

  /* =======  ======= */

  const greeting = (name?: string) => {
    let result: void;
    if (name) {
      result = console.log(`안녕하세요 ${name}`);
    } else {
      result = console.log("이름이 없습니다.");
    }
    return result;
  };

  greeting("김선중");

  /* =======  ======= */

  const countLength = (n: string | number) => n.toString().length;

  /* =======  ======= */

  type Married = {
    pay: number;
    hasHome: boolean;
    charm: string;
  };

  const canMarried = ({ pay, hasHome, charm }: Married): string => {
    let score: number = ~~(pay / 10000);
    if (hasHome) score += 500;
    if (charm === "상") score += 100;
    return score >= 600 ? "결혼 가능" : "결혼 불가능";
  };

  console.log(canMarried({ pay: 20000, hasHome: true, charm: "상" }));
  console.log(canMarried({ pay: 10000, hasHome: false, charm: "하" }));

  /* =======  ======= */

  const conversionArray = (arr: (string | number)[]) => {
    const convertedArr = arr.map((i) => {
      if (typeof i === "string") {
        return Number(i);
      } else {
        return i;
      }
    });
    return convertedArr;
  };

  console.log(conversionArray([1, "2", 3]));

  /* =======  ======= */

  type Subject = { subject: string | string[] };

  const lastSubject = (subject: Subject) => {
    const subjects = subject.subject;
    if (typeof subjects === "string") {
      return subjects;
    } else if (Array.isArray(subjects)) {
      return subjects[subjects.length - 1];
    } else {
      throw new Error("유효한 키값이 아닙니다.");
    }
  };

  console.log(lastSubject({ subject: "math" }));
  console.log(lastSubject({ subject: ["science", "art", "korean"] }));

  /* =======  ======= */

  type Color = { color?: string };
  type Size = { size: number };
  type Position = { readonly position: Array<number> };

  type Mytype = Color & Size & Position;

  let myType: Mytype = { size: 20, position: [1, 2] };
  console.log(myType);

  /* =======  ======= */

  type Mytype2 = {
    name: string;
    phone: number;
    email: string;
    isAdult: boolean;
  };

  let info: Mytype2 = {
    name: "김선중",
    phone: 82107753576,
    email: "ksj",
    isAdult: true,
  };

  console.log("info --->", info);

  /* =======  ======= */

  type Go = "가위" | "바위" | "보";
  const game = (go: Go): Go[] => [go];
  console.log(game("가위"));

  /* =======  ======= */

  type Func = (a: string) => string;
  const myFunction: Func = (a) => a;
  console.log(myFunction("ㅎㅇ"));

  /* =======  ======= */

  type CutZero = (n: string) => string;
  const cutZero: CutZero = (n) => {
    if (n[0] === "0") {
      return n.substring(1);
    } else {
      return n;
    }
  };
  console.log(" --->", cutZero("01"));

  type RemoveDash = (n: string) => number;
  const removeDash: RemoveDash = (n) => {
    let result = n.replace(/-/g, "");
    return parseFloat(result);
  };

  console.log("removeDash --->", removeDash("+82-10-7743-4562"));

  const 만들함수 = (num: string, func1: Func, func2: RemoveDash): number => {
    let cutZero = func1(num);
    let removeDash = func2(cutZero);
    return removeDash;
  };
  console.log(만들함수("010-1111-2222", cutZero, removeDash));

  /* =======  ======= */

  // let changeButton = document.querySelector("#button");
  // if (changeButton instanceof HTMLButtonElement) {
  //   changeButton.addEventListener("click", function (event) {
  //     alert("Hello world");
  //   });
  // }

  // let changeImg = document.querySelector("#image");
  // if (changeImg instanceof HTMLImageElement) {
  //   changeImg.src = "https://wepick.kr/wp-content/uploads/2022/08/image-21.png";
  // }

  // let changeAnchor = document.querySelectorAll(".naver");

  // changeAnchor.forEach((element) => {
  //   if (element instanceof HTMLAnchorElement) {
  //     element.href = "google.com";
  //   }
  // });
}
