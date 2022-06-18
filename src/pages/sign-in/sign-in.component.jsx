import React from 'react';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import styled from 'styled-components';

const SignIn = () => {
  return (
    <SignInWrapper>
      <SignInBox>
        <h1>
          Wanted PreOnboarding
          <br />
          Pre Assignment - 최중재
        </h1>
        <SignInForm />
      </SignInBox>
    </SignInWrapper>
  );
};

export default SignIn;

const SignInWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  width: 100%;
  max-width: 350px;
  padding-top: 2rem;

  h1 {
    margin-bottom: 1rem;
  }
`;
