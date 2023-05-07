{
  type Success = {
    result: "success";
    response: {
      body: string;
    };
  };

  type Fail = {
    result: "fail";
    msg: string;
  };

  type LoginState = Success | Fail;

  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😢 ${state.msg}`);
    }
  }

  // Success 타입의 값 전달 예시
  const successState: Success = {
    result: "success",
    response: {
      body: "로그인에 성공하였습니다.",
    },
  };

  printLoginState(successState);

  // Fail 타입의 값 전달 예시
  const failState: Fail = {
    result: "fail",
    msg: "로그인에 실패하였습니다.",
  };
  printLoginState(failState);
}
