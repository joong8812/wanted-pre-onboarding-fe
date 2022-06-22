export const emailValidationCheck = (email) => {
  const emailReg =
    /^[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  return emailReg.test(email);
};

export const passwordValidationCheck = (password) => {
  const emailReg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
  return emailReg.test(password);
};

export const checkUserEmailAndPw = async (email, password) => {
  let resultData = {
    result: false,
    message: '이메일 및 패스워드를 확인해주세요.',
  };

  try {
    const response = await fetch('/data/user.json');
    const userData = await response.json();

    // find user
    const targetUser = userData.users.filter((user) => user.email === email)[0];
    if (targetUser === undefined) return resultData;

    // password confirm
    if (targetUser.password !== password) return resultData;

    // pass
    return { user: targetUser, result: true, message: '' };
  } catch (error) {
    console.log(error);
    return {
      ...resultData,
      message: '서버 통신 에러 입니다. 잠시 후 다시 시도해주세요.',
    };
  }
};
