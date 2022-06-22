import React, { useRef, useState } from 'react';

import styled, { css } from 'styled-components';

import { FaRegSmile } from 'react-icons/fa';

const FeedItemCommentInput = (props) => {
  const [isEnableSubmitBtn, setIsEnableSubmitBtn] = useState(false);
  const [commentValue, setCommentValue] = useState('');
  const commentRef = useRef();

  const commentChangeHandler = () => {
    const currCommentValue = commentRef.current.value;
    setIsEnableSubmitBtn(Boolean(currCommentValue.length));
    setCommentValue(currCommentValue);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(commentRef.current.value);
    props.commentSubmit(commentRef.current.value);
    setCommentValue('');
  };

  return (
    <form onSubmit={submitHandler}>
      <Wrapper>
        <Left>
          <FaRegSmile />
          <input
            type="text"
            placeholder="댓글달기..."
            ref={commentRef}
            value={commentValue}
            onChange={commentChangeHandler}
            style={{ width: '300px' }}
          />
        </Left>
        <Right>
          <CommentSubmitBtn type="submit" enable={isEnableSubmitBtn}>
            게시
          </CommentSubmitBtn>
        </Right>
      </Wrapper>
    </form>
  );
};

export default FeedItemCommentInput;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 22px;
    margin-right: 8px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div``;

const disabledButtonCss = css`
  opacity: 0.5;
`;

const enabledButtonCss = css`
  cursor: pointer;
`;

const CommentSubmitBtn = styled.button`
  color: rgb(64, 149, 239);
  background-color: white;
  border-color: white;
  cursor: pointer;
  font-weight: 900;
  ${({ enable }) => (enable ? enabledButtonCss : disabledButtonCss)}
`;
