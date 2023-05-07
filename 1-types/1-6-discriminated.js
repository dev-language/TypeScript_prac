{
  function printLoginState(state) {
    if (state.result === "success") {
      console.log("\uD83C\uDF89 ".concat(state.response.body));
    } else {
      console.log("\uD83D\uDE22 ".concat(state.msg));
    }
  }
  // Success 타입의 값 전달 예시
  var successState = {
    result: "success",
    response: {
      body: "로그인에 성공하였습니다.",
    },
  };
  printLoginState(successState);
  // Fail 타입의 값 전달 예시
  var failState = {
    result: "fail",
    msg: "로그인에 실패하였습니다.",
  };
  printLoginState(failState);
}
