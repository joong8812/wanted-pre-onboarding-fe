import React from 'react';

import { useSelector } from 'react-redux';

import styled from 'styled-components';

const FeedItemCommentDisplay = ({ commentList }) => {
  const currUser = useSelector((state) => state.auth.user);

  return (
    <>
      <ul>
        {commentList.map((comment, idx) => (
          <CommentRow key={idx}>
            <UserName>{currUser.name}</UserName>&nbsp;&nbsp;
            <Comment>{comment}</Comment>
          </CommentRow>
        ))}
      </ul>
    </>
  );
};

export default FeedItemCommentDisplay;

const CommentRow = styled.li`
  margin-bottom: 8px;
`;

const UserName = styled.span`
  font-weight: 900;
`;

const Comment = styled.span`
  font-size: 14px;
`;
