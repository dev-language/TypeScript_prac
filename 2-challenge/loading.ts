type LoadingState = {
  state: "loading";
};

type SuccessState = {
  state: "success";
  response: {
    name: string;
  };
};

type ErrorState = {
  state: "error";
  reason: string;
};

type ResourceLoadState = LoadingState | SuccessState | ErrorState;

function printUserInfo(result: ResourceLoadState) {
  switch (result.state) {
    case "loading":
      console.log("데이터 로딩중...");
      break;
    case "success":
      console.log("데이터 로딩 성공");
      console.log(`${result.response.name}님 환영합니다 🎉`);
      break;
    case "error":
      console.log("데이터 로딩 실패");
      console.log(`실패 사유: ${result.reason}`);
      break;
    default:
      throw new Error("유효하지 않은 값 입니다.");
  }
}

printUserInfo({ state: "loading" });
printUserInfo({ state: "success", response: { name: "서근" } });
printUserInfo({ state: "error", reason: "Network error" });
