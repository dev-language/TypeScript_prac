{
    var moveTo_1 = function (direction) {
        console.log(direction);
        return direction;
    };
    moveTo_1('left');
    function add(a, b) {
        if (typeof a === 'string' && typeof b === 'string') {
            return a.concat(b);
        }
        else if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        else {
            throw new Error('Invalid arguments');
        }
    }
    console.log(add(1, 2)); // 3
    console.log(add('서근', '개발노트')); // '서근노트'
    function getOrderStatusMessage(status) {
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
                throw new Error("\uC0C1\uD0DC \uC624\uB958: ".concat(status));
        }
    }
    var orderStatus = 'completed';
    console.log(getOrderStatusMessage(orderStatus)); // '주문이 완료되었습니다.'
    function printLoginState(state) {
        if ('response' in state) {
            console.log("\uD83C\uDF89 ".concat(state.response.body));
        }
        else {
            console.log("\uD83D\uDE22 ".concat(state.msg));
        }
    }
    // Success 타입의 값 전달 예시
    var successState = {
        response: {
            body: '로그인에 성공하였습니다.'
        }
    };
    printLoginState(successState);
    // Fail 타입의 값 전달 예시
    var failState = {
        msg: '로그인에 실패하였습니다.'
    };
    printLoginState(failState);
}
