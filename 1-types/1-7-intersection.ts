{
  /**
   * Intersection Types: &
   */

  type User = {
    name: string;
    age: number;
  };

  type Work = {
    pay: number;
    location: {
      city: string;
      apartment: string;
    };
  };

  type UserInfo = User & Work;

  const CreateUser = (person: UserInfo) => {
    console.log(person.name, person.age, person.location, person.pay);
  };

  CreateUser({
    name: "선중",
    age: 28,
    pay: 200000,
    location: {
      city: "대전",
      apartment: "행복아파트",
    },
  });
}
