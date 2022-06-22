import React from 'react';

import Feed from '../../components/feed/feed.component';

import styled from 'styled-components';

const Main = () => {
  return (
    <MainContainer>
      <FeedWrappper>
        <Feed />
      </FeedWrappper>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.main`
  margin-top: 6rem;

  display: flex;
  justify-content: center;
`;

const FeedWrappper = styled.div`
  width: 100%;
  max-width: 470px;

  display: flex;
  justify-content: center;
`;
