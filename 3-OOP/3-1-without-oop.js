{
    var coffeeBeans_1 = 1000;
    var BEANS_GRAM_PER_SHOT_1 = 18;
    var makeCoffee = function (shots, hasSugar) {
        if (coffeeBeans_1 < shots * BEANS_GRAM_PER_SHOT_1) {
            throw new Error("커피의 수량이 부족합니다.");
        }
        coffeeBeans_1 -= shots * BEANS_GRAM_PER_SHOT_1;
        return {
            shots: shots,
            hasSugar: hasSugar || false,
        };
    };
    var printCoffeeInfo = function (coffee) {
        console.log("".concat(coffee.hasSugar ? "설탕을 추가한 " : "", "\uCEE4\uD53C ").concat(coffee.shots, "\uC0F7\uC744 \uCD94\uAC00\uD558\uC5EC, \uCD1D").concat(coffeeBeans_1, "g\uC758 \uC6D0\uB450\uAC00 \uB0A8\uC558\uC2B5\uB2C8\uB2E4."));
    };
    var coffee1 = makeCoffee(1);
    printCoffeeInfo(coffee1);
    var coffee2 = makeCoffee(1, true);
    printCoffeeInfo(coffee2);
}
