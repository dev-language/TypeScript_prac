{
  /**
   * Union Types: OR
   */

  type Direction = 'left' | 'right' | 'top' | 'bottom';
  const moveTo = (direction: Direction) => {
    console.log(direction);
    return direction;
  };

  moveTo('left');

  /* ====== */

  type StringOrNumber = string | number;

  function add(a: StringOrNumber, b: StringOrNumber): StringOrNumber {
    if (typeof a === 'string' && typeof b === 'string') {
      return a.concat(b);
    } else if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      throw new Error('Invalid arguments');
    }
  }

  console.log(add(1, 2)); // 3
  console.log(add('서근', '개발노트')); // '서근노트'

  /* ====== */

  type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled';
  function getOrderStatusMessage(status: OrderStatus): string {
    switch (status) {
      case 'pending':
        return '주문이 접수되었습니다.';
      case 'processing':
        return '주문이 처리 중입니다.';
      case 'completed':
        return '주문이 완료되었습니다.';
      case 'cancelled':
        return '주문이 취소되었습니다.';
      default:
        throw new Error(`상태 오류: ${status}`);
    }
  }

  const orderStatus: OrderStatus = 'completed';
  console.log(getOrderStatusMessage(orderStatus)); // '주문이 완료되었습니다.'

  /* ====== */

  type Success = {
    response: {
      body: string;
    };
  };

  type Fail = {
    msg: string;
  };

  type LoginState = Success | Fail;

  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😢 ${state.msg}`);
    }
  }

  // Success 타입의 값 전달 예시
  const successState: Success = {
    response: {
      body: '로그인에 성공하였습니다.',
    },
  };
  printLoginState(successState);

  // Fail 타입의 값 전달 예시
  const failState: Fail = {
    msg: '로그인에 실패하였습니다.',
  };
  printLoginState(failState);
}
