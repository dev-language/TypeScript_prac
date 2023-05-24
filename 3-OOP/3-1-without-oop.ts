{
  // let coffee: number = 100;

  // const makeCoffee = (shots: number): string => {
  //   let beansPerCoffee = 20;
  //   let beanQuantity = coffee - beansPerCoffee * shots;
  //   let canMakeCoffee = beanQuantity / beansPerCoffee;

  //   if (canMakeCoffee < 0) {
  //     return `현재 만들 수 있는 커피는 ${canMakeCoffee + shots}잔 입니다`;
  //   } else {
  //     return `${shots}개의 샷이 추출 되었습니다. 총 ${beanQuantity}g의 원두가 남아있고, ${canMakeCoffee}개의 커피를 만들 수 있습니다.. `;
  //   }
  // };

  // console.log(makeCoffee(1));
  // console.log(makeCoffee(2));
  // console.log(makeCoffee(3));
  // console.log(makeCoffee(4));
  // console.log(makeCoffee(5));
  // console.log(makeCoffee(7));

  type CoffeeCup = {
    shots: number;
    hasSugar: boolean;
  };

  let coffeeBeans: number = 1000;
  let BEANS_GRAM_PER_SHOT = 18;

  const makeCoffee = (shots: number, hasSugar?: boolean): CoffeeCup => {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("커피의 수량이 부족합니다.");
    }
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots,
      hasSugar: hasSugar || false,
    };
  };

  const printCoffeeInfo = (coffee: CoffeeCup) => {
    console.log(
      `${coffee.hasSugar ? "설탕을 추가한 " : ""}커피 ${
        coffee.shots
      }샷을 추가하여, 총${coffeeBeans}g의 원두가 남았습니다.`
    );
  };

  const coffee1 = makeCoffee(1);
  printCoffeeInfo(coffee1);

  const coffee2 = makeCoffee(1, true);
  printCoffeeInfo(coffee2);
}
