import React, { forwardRef } from 'react';

import styled, { css } from 'styled-components';

const FormInput = ({ label, ...otherProps }, ref) => {
  const inputValueLength = otherProps.value.length;
  return (
    <Group>
      <Input {...otherProps} shrink={inputValueLength} ref={ref} />
      {label && (
        <FormInputLabel shrink={inputValueLength}>{label}</FormInputLabel>
      )}
    </Group>
  );
};

export default forwardRef(FormInput);

const subColor = 'rgb(234, 234, 234)';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: 2px;
  font-size: 12px;
  color: grey;
`;

const shrinkInputStyles = css`
  ${({ shrink }) =>
    shrink &&
    css`
      padding: 14px 0px 2px 8px;
    `}
`;

const FormInputLabel = styled.label`
  color: grey;
  font-size: 16px;
  position: absolute;
  pointer-events: none;
  left: 8px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: rgb(250, 250, 250);
  color: ${mainColor};
  line-height: 18px;
  min-width: 258px;
  padding: 9px 0px 7px 8px;
  display: block;
  width: 100%;
  border: 1px solid ${subColor};
  border-radius: 2px;
  margin: 1rem 0;

  ${shrinkInputStyles}

  &:focus {
    outline: none;
    ${shrinkInputStyles}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 20px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;
