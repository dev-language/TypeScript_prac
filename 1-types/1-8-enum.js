{
    /**
     * Enum
     * 여러 상수 값을 한곳에 모아서 관리할 수 있는 타입
     * 타입이 보장되고 타입의 값이 변화되지 않으므로 안전하게 타입을 관리할 수 있다.
     * enum에 값을 정하지 않으면 위에서부터 0부터 1씩 늘어난다.
     * enum에 기본값(숫자, 문자)을 정할 수 있다.
     */
    /* ======= JAVASCRIPT: 상수를 정의할때 대문자로 지정해주는것이 좋다. ======= */
    var COOKIE = {
        COOKIE_NAME: "AccessToken",
        REFRESH_NAME: "RefreshToken"
    };
    var END_POINT = {
        SSE: function (domain) { return "".concat(domain, "/api/subscribe"); }
    };
    Object.freeze(COOKIE);
    Object.freeze(END_POINT);
    var MONTH_ENUM = Object.freeze({ JAN: 1, FEB: 2, MAR: 3 });
    console.log("Object.keys(MONTH_ENUM) --->", Object.keys(MONTH_ENUM)); // [ 'JAN', 'FEB', 'MAR' ]
    // 예시: 시도하는 변경 작업
    // 에러 발생: "Cannot assign to read-only property."
    COOKIE.COOKIE_NAME = "NewAccessToken";
    END_POINT.SSE = function (domain) { return "".concat(domain, "/api/new-subscribe"); };
    // MONTH_ENUM.JAN = 5;
    /* ======= TYPESCRIPT: 파스칼 케이스로 작성해야한다. ======= */
    var Cookie = void 0;
    (function (Cookie) {
        Cookie["CookieName"] = "AccessToken";
        Cookie["RefreshName"] = "RefreshToken";
    })(Cookie || (Cookie = {}));
    var MyCookie = Cookie.CookieName;
    console.log("Cookie.RefreshName --->", Cookie.RefreshName); // RefreshToken
    console.log("MyCookie --->", MyCookie); // AccessToken
    /* ======= 함수도 enum에 작성 가능하다. ======= */
    var Colors = void 0;
    (function (Colors) {
        Colors[Colors["Red"] = getColorCode("RED")] = "Red";
        Colors[Colors["Green"] = getColorCode("GREEN")] = "Green";
        Colors[Colors["Blue"] = getColorCode("BLUE")] = "Blue";
    })(Colors || (Colors = {}));
    function getColorCode(color) {
        // 실제로는 color 값에 따라 적절한 컬러 코드를 계산하는 로직을 수행한다고 가정합니다.
        if (color === "RED")
            0xff0000; // 빨간색의 컬러 코드
        else if (color === "GREEN")
            0x00ff00; // 초록색의 컬러 코드
        else if (color === "BLUE")
            0x0000ff; // 파란색의 컬러 코드
        return 0x000000;
    }
    console.log(Colors.Red); // 16711680
    console.log(Colors.Green); // 65280
    console.log(Colors.Blue); // 255
    var Month = void 0;
    (function (Month) {
        Month[Month["Jan"] = 1] = "Jan";
        Month[Month["Feb"] = 2] = "Feb";
        Month[Month["Mar"] = 3] = "Mar";
        Month[Month["Apr"] = 4] = "Apr";
        Month[Month["May"] = 5] = "May";
        Month[Month["Jun"] = 6] = "Jun";
        Month[Month["Jul"] = 7] = "Jul";
        Month[Month["Aug"] = 8] = "Aug";
        Month[Month["Sep"] = 9] = "Sep";
        Month[Month["Oct"] = 10] = "Oct";
        Month[Month["Nov"] = 11] = "Nov";
        Month[Month["Dec"] = 12] = "Dec";
    })(Month || (Month = {}));
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
