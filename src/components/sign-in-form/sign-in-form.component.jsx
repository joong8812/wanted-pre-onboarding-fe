import React, { useRef, useState } from 'react';

import FormInput from '../form-input/form-input.component';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
  email: '',
  password: '',
};

let loginUserInfo = {
  email: '',
  isLogin: false,
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const formFieldsChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // email validation
    // password validation
    // check user email & password

    loginUserInfo = { email, isLogin: true };
    localStorage.setItem('loginUser', JSON.stringify(loginUserInfo));
    navigate('main');
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          ref={emailRef}
          onChange={formFieldsChangeHandler}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          ref={passwordRef}
          value={password}
          onChange={formFieldsChangeHandler}
          required
          autoComplete="false"
        />
        <SignInButton type="submit">로그인</SignInButton>
      </form>
    </div>
  );
};

export default SignInForm;

const SignInButton = styled.button`
  width: 100%;
  padding: 10px 0;
  border: none;
  background-color: rgb(0, 149, 246);
  border-radius: 4px;
  margin-bottom: 1rem;
  cursor: pointer;
  color: white;
  font-size: 14px;
`;
