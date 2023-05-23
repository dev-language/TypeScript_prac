{
  /**
   * Enum
   * 여러 상수 값을 한곳에 모아서 관리할 수 있는 타입
   * enum에 값을 정하지 않으면 위에서부터 0부터 1씩 늘어난다.
   * enum에 기본값(숫자, 문자)을 정할 수 있다.

   * 타입스크립트에서 enum은 타입이 정확하게 보장되지 않기 때문에 사용하지 않는것이 좋다.
   * enum을 사용하지 않고 Union 타입을 사욯아는것이 좋다.
   */

  /* ======= JAVASCRIPT: 상수를 정의할때 대문자로 지정해주는것이 좋다. ======= */

  const COOKIE = {
    COOKIE_NAME: "AccessToken",
    REFRESH_NAME: "RefreshToken",
  };
  const END_POINT = {
    SSE: (domain: string) => `${domain}/api/subscribe`,
  };

  Object.freeze(COOKIE);
  Object.freeze(END_POINT);

  const MONTH_ENUM = Object.freeze({ JAN: 1, FEB: 2, MAR: 3 });
  console.log("Object.keys(MONTH_ENUM) --->", Object.keys(MONTH_ENUM)); // [ 'JAN', 'FEB', 'MAR' ]

  // 예시: 시도하는 변경 작업
  // 에러 발생: "Cannot assign to read-only property."
  COOKIE.COOKIE_NAME = "NewAccessToken";
  END_POINT.SSE = (domain) => `${domain}/api/new-subscribe`;
  // MONTH_ENUM.JAN = 5;

  /* ======= TYPESCRIPT: 파스칼 케이스로 작성해야한다. ======= */

  enum Cookie {
    CookieName = "AccessToken",
    RefreshName = "RefreshToken",
  }

  const MyCookie = Cookie.CookieName;
  console.log("Cookie.RefreshName --->", Cookie.RefreshName); // RefreshToken
  console.log("MyCookie --->", MyCookie); // AccessToken

  enum Month {
    Jan = 1,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec,
  }

  //첫 번째 출력은 enum의 숫자 값을 키로 사용한 객체 형태이고, 두 번째 출력은 enum 멤버 이름과 해당 숫자 값이 나열된 형태입니다.
  console.log(Month);

  /* {
    '1': 'Jan',
    '2': 'Feb',
    '3': 'Mar',
    '4': 'Apr',
    '5': 'May',
    '6': 'Jun',
    '7': 'Jul',
    '8': 'Aug',
    '9': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
  } */

  /* ======= 함수도 enum에 작성 가능하다. ======= */

  enum Colors {
    Red = getColorCode("RED"),
    Green = getColorCode("GREEN"),
    Blue = getColorCode("BLUE"),
  }

  function getColorCode(color: string): number {
    if (color === "RED") 0xff0000;
    else if (color === "GREEN") 0x00ff00;
    else if (color === "BLUE") 0x0000ff;
    return 0x000000;
  }

  console.log(Colors.Red); // 16711680
  console.log(Colors.Green); // 65280
  console.log(Colors.Blue); // 255
}
