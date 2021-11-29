/**
 * 빈 값 체크
 */
export const emptyCheck = (value : String) => {
    if(value == '' || value == null){
        return false;
    }
    return true;
}

/**
 * 이메일 유효성 체크
 */
export const emailCheck = (email: string) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(email) && emptyCheck(email)){
        return true;
    }
    return false;
}

/**
 * 사업자번호 유효성 체크
 */
export const corporationNumberCheck = (corpNum: string) => {
    let numberMap = corpNum.replace(/-/gi, '').split('').map(function(d){
        return parseInt(d,10);
    });

    if(!emptyCheck(corpNum)){
        return false;
    }

    if(numberMap.length == 10){
        const keyArr = [1,3,7,1,3,7,1,3,5];
        var chk=0;

        keyArr.forEach(function(d,i){
            chk += d * numberMap[i];
        });

        chk += parseInt((keyArr[8]*numberMap[8])/10, 10);
        return Math.floor(numberMap[9]) === ((10-(chk%10)) %10);
    }

    return false;
}

/**
 * 비밀번호 유효성 체크
 */
export const passwordCheck = (password:string) => {

    if (!emptyCheck(password)) {
        alert("비밀번호를 입력해주세요.");
        return false;
    }

    var check1 = /^(?=.*[a-zA-Z])(?=.*[0-9]).{10,12}$/.test(password);   //영문,숫자

	var check2 = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{10,12}$/.test(password);  //영문,특수문자

	var check3 = /^(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{10,12}$/.test(password);  //특수문자, 숫자

	if(!(check1||check2||check3)){
		alert("비밀번호는 영문(대소문자), 숫자, 특수문자 중 2종류 이상을 사용해주세요.\n길이는 10~12자 사이여야합니다.");
		return false;

	}

	if(/(\w)\1\1/.test(password)){

		alert('같은 문자를 3번 이상 사용하실 수 없습니다.\n패스워드 설정안내를 확인해 주세요.');

		return false;

	}

    return true;
}