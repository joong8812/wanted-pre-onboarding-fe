import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import styled, { css } from 'styled-components';
import { FaRegHeart, FaRegCompass } from 'react-icons/fa';

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <span>Pre Assignment</span>
        </LogoContainer>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search" />
        </SearchContainer>
        <ButtonsContainer>
          <IconWrap>
            <CompassIcon />
          </IconWrap>
          <IconWrap>
            <HeartIcon />
          </IconWrap>
          <LogoutWrap>
            <LogoutButton>Logout</LogoutButton>
          </LogoutWrap>
        </ButtonsContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;

const navChildrenCommon = css`
  padding: 18px 25px;
  width: 100%;
  z-index: 5;
`;

const NavigationContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;

  position: fixed;
  top: 0;
  z-index: 10;

  background-color: white;
  border-bottom: 1px solid rgb(219, 219, 219);

  padding: 0 20px;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: black;

  ${navChildrenCommon};
`;

const SearchContainer = styled.div`
  ${navChildrenCommon};
  min-width: 125px;

  @media (max-width: 640px) {
    display: none;
  }
`;
const SearchInput = styled.input`
  background-color: rgb(250, 250, 250);
  color: black;
  padding: 9px 0px 7px 8px;
  width: 100%;
  border: 1px solid grey;
  border-radius: 2px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: right;
  ${navChildrenCommon};
`;
const IconWrap = styled.span`
  padding: 8px 0;
  cursor: pointer;
`;

const iconCommon = css`
  width: 40px;
  font-size: 20px;
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
