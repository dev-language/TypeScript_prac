{
  class Effect {
    q: string;
    w: string;
    constructor() {
      this.q = "attack";
      this.w = "forword";
    }

    edit(newQ: string, newW: string) {
      this.q = newQ;
      this.w = newW;
    }
  }

  let nunu = new Effect();
  nunu.q = "공격!";
  nunu.w = "앞으로!";
  console.log("nunu --->", nunu);

  nunu.edit("마법 공격!", "앞으로 점프");
  console.log("nunu --->", nunu);

  /* =======  ======= */

  class Car {
    carName: string;
    price: number;
    constructor(carName: string, price: number) {
      this.carName = carName;
      this.price = price;
    }

    tax(): number {
      return this.price * 0.1;
    }
  }

  let car1 = new Car("소나타", 3000);
  console.log("car1 --->", car1);
  console.log("car1.tax() --->", car1.tax());

  /* =======  ======= */

  class Word {
    num: number[] = [];
    str: string[] = [];
    constructor(...n: (string | number)[]) {
      n.forEach((item) => {
        if (typeof item === "string") {
          this.str.push(item);
        } else {
          this.num.push(item);
        }
      });
    }
  }

  let obj = new Word("kim", 3, 5, "park");
  console.log(obj.num); //[3,5]
  console.log(obj.str); //['kim', 'park']
}
