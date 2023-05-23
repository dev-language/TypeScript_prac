{
  /**
   * Enum
   * 여러 상수 값을 한곳에 모아서 관리할 수 있는 타입
   * 타입이 보장되고 타입의 값이 변화되지 않으므로 안전하게 타입을 관리할 수 있다.
   * enum에 값을 정하지 않으면 위에서부터 0부터 1씩 늘어난다.
   * enum에 기본값(숫자, 문자)을 정할 수 있다.
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

  /* ======= 함수도 enum에 작성 가능하다. ======= */

  enum Colors {
    Red = getColorCode("RED"),
    Green = getColorCode("GREEN"),
    Blue = getColorCode("BLUE"),
  }

  function getColorCode(color: string): number {
    // 실제로는 color 값에 따라 적절한 컬러 코드를 계산하는 로직을 수행한다고 가정합니다.
    if (color === "RED") 0xff0000; // 빨간색의 컬러 코드
    else if (color === "GREEN") 0x00ff00; // 초록색의 컬러 코드
    else if (color === "BLUE") 0x0000ff; // 파란색의 컬러 코드

    return 0x000000;
  }

  console.log(Colors.Red); // 16711680
  console.log(Colors.Green); // 65280
  console.log(Colors.Blue); // 255

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
}
