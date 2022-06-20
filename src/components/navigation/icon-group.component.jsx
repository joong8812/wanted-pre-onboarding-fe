import React from 'react';

import styled, { css } from 'styled-components';
import { FaRegHeart, FaRegCompass } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const IconGroup = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('loginUser');
    navigate('/');
  };

  return (
    <>
      <IconWrap>
        <CompassIcon />
      </IconWrap>
      <IconWrap>
        <HeartIcon />
      </IconWrap>
      <LogoutWrap>
        <LogoutButton onClick={logoutHandler}>Logout</LogoutButton>
      </LogoutWrap>
    </>
  );
};

export default IconGroup;

const iconCommon = css`
  width: 40px;
  font-size: 20px;
`;

const IconWrap = styled.span`
  padding: 8px 0;
  cursor: pointer;
`;

const HeartIcon = styled(FaRegHeart)`
  ${iconCommon}
`;
const CompassIcon = styled(FaRegCompass)`
  ${iconCommon}
`;

const LogoutWrap = styled.div`
  padding: 8px 0;
`;
const LogoutButton = styled.button`
  background-color: white;
  font-size: 16px;
  cursor: pointer;
`;
