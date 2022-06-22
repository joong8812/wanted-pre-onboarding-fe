import React, { useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

import FormInput from '../form-input/form-input.component';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import {
  emailValidationCheck,
  passwordValidationCheck,
  checkUserEmailAndPw,
} from '../../utils/validation/validation';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPwValid, setIsPwValid] = useState(false);
  const { email, password } = formFields;

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const formFieldsChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });

    switch (name) {
      case 'email':
        setIsEmailValid(emailValidationCheck(value));
        break;
      case 'password':
        setIsPwValid(passwordValidationCheck(value));
        break;
    }
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    // check user email & password
    const checkUserResult = await checkUserEmailAndPw(email, password);

    if (!checkUserResult.result) {
      alert(checkUserResult.message);
      return;
    }

    const { name } = checkUserResult.user;
    localStorage.setItem(
      'loginUser',
      JSON.stringify({ email: email, name: name })
    );
    dispatch(authActions.login(checkUserResult.user));
    navigate('main');
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <FormInput
          label="Email"
          type="text"
          name="email"
          value={email}
          ref={emailRef}
          onChange={formFieldsChangeHandler}
          valid={isEmailValid}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          ref={passwordRef}
          value={password}
          onChange={formFieldsChangeHandler}
          autoComplete="false"
          valid={isPwValid}
          required
        />
        <SignInButton type="submit" disabled={!isEmailValid || !isPwValid}>
          로그인
        </SignInButton>
      </form>
    </div>
  );
};

export default SignInForm;

const disabledButtonCss = css`
  opacity: 0.5;
`;

const enabledButtonCss = css`
  cursor: pointer;
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 10px 0;
  border: none;
  background-color: rgb(0, 149, 246);
  border-radius: 4px;
  margin-bottom: 1rem;
  color: white;
  font-size: 14px;
  ${({ disabled }) => (disabled ? disabledButtonCss : enabledButtonCss)}
`;
