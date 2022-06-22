import React from 'react';

import styled from 'styled-components';

import {
  FaRegHeart,
  FaRegCommentDots,
  FaRegPaperPlane,
  FaRegBookmark,
} from 'react-icons/fa';

const FeedItemIcons = () => {
  return (
    <IconsContainer>
      <Left>
        <FaRegHeart />
        <FaRegCommentDots />
        <FaRegPaperPlane />
      </Left>
      <Right>
        <FaRegBookmark />
      </Right>
    </IconsContainer>
  );
};

export default FeedItemIcons;

const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 22px;
  }
`;

const Left = styled.div`
  padding: 10px;

  svg {
    margin-right: 1rem;
  }
`;

const Right = styled.div`
  padding: 10px;
`;
