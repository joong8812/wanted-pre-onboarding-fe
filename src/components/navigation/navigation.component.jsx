import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import IconGroup from './icon-group.component';

import styled, { css } from 'styled-components';

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
        <IconsContainer>
          <IconGroup />
        </IconsContainer>
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

  @media (max-width: 640px) {
    padding: 18px 0px;
  }
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

const IconsContainer = styled.div`
  display: flex;
  justify-content: right;
  ${navChildrenCommon};
`;
