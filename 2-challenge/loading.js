function printUserInfo(result) {
    switch (result.state) {
        case "loading":
            console.log("데이터 로딩중...");
            break;
        case "success":
            console.log("데이터 로딩 성공");
            console.log("".concat(result.response.name, "\uB2D8 \uD658\uC601\uD569\uB2C8\uB2E4 \uD83C\uDF89"));
            break;
        case "error":
            console.log("데이터 로딩 실패");
            console.log("\uC2E4\uD328 \uC0AC\uC720: ".concat(result.reason));
            break;
        default:
            throw new Error("유효하지 않은 값 입니다.");
    }
}
printUserInfo({ state: "loading" });
printUserInfo({ state: "success", response: { name: "서근" } });
printUserInfo({ state: "error", reason: "Network error" });
