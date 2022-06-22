import React from 'react';

import styled from 'styled-components';

import { FaEllipsisH } from 'react-icons/fa';

const FeedItemHead = ({ writer }) => {
  return (
    <HeadContainer>
      <Left>
        <ProfileImage />
        <WriterArea>{writer}</WriterArea>
      </Left>
      <Right>
        <FaEllipsisH />
      </Right>
    </HeadContainer>
  );
};

export default FeedItemHead;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div``;

const HeadContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
`;

const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  background-color: rgb(211, 211, 211);
  border-radius: 18px;
`;

const WriterArea = styled.span`
  margin-left: 8px;
`;
