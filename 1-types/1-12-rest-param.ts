{
  const restFunc = (...n: Array<number>) => {
    console.log(n);
  };
  restFunc(1, 2, 3, 4, 5);

  type Param = {
    name: string;
    age: number;
  };

  let { name, age }: Param = { name: "", age: 28 };
  function destructuring({ name, age }: Param) {
    console.log(name, age);
  }
  destructuring({ name: "미진", age });

  /* =======  ======= */

  const maxInt = (...n: number[]) => {
    let fillterNumber = n.filter((num) => num > 0 && Number.isInteger(num));
    if (fillterNumber.length > 0) {
      return Math.max(...fillterNumber);
    } else {
      throw new Error("0이상의 정수만 입력해주세요");
    }
  };
  console.log(maxInt(1, 2, 5));

  interface ObjParam {
    user: string;
    comment: number[];
    admin: boolean;
  }
  const myObjFunc = ({ user, comment, admin }: ObjParam) => {
    console.log(user, comment, admin);
  };

  myObjFunc({ user: "kim", comment: [3, 5, 4], admin: false });

  /* =======  ======= */

  type Params = (number | string | boolean)[];

  const myFunc = ([...n]: Params) => {
    return n;
  };
  console.log(myFunc([40, "선중", false]));
}
