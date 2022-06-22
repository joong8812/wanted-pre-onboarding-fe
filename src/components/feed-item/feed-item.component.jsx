import React, { useState } from 'react';

import FeedItemHead from './feed-item-head.component';
import FeedItemIcons from './feed-item-icons.component';
import FeedItemCommentInput from './feed-item-comment-input.component';

import styled from 'styled-components';

const FeedItem = ({ feed }) => {
  const { writer, imageUrl, likeCount } = feed;
  const [commentList, setCommentList] = useState([]);

  const commentSubmit = (comment) => {
    setCommentList([...commentList, comment]);
  };

  return (
    <FeedItemContainer>
      <FeedItemHead writer={writer} />
      <ImageContainer>
        <Image src={imageUrl} alt="feedimage" />
      </ImageContainer>
      <FeedItemIcons />
      <LikeContainer>
        <span>좋아요 {likeCount}개</span>
      </LikeContainer>
      <CommentContainer>
        <CommentDisplayArea>
          {commentList.map((comment, idx) => (
            <>
              <p key={idx}>{comment}</p>
            </>
          ))}
        </CommentDisplayArea>
        <CommentInputArea>
          <FeedItemCommentInput commentSubmit={commentSubmit} />
        </CommentInputArea>
      </CommentContainer>
    </FeedItemContainer>
  );
};

export default FeedItem;

const FeedItemContainer = styled.article`
  width: 100%;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ImageContainer = styled.div``;
const Image = styled.img`
  width: 100%;
  max-height: 586px;
  object-fit: cover;
`;

const LikeContainer = styled.div`
  padding: 10px;

  span {
    font-weight: 800;
    font-size: 14px;
  }
`;
const CommentContainer = styled.div`
  display: 100%;
`;

const CommentDisplayArea = styled.div`
  display: 100%;
  padding: 10px;
`;

const CommentInputArea = styled.div`
  display: 100%;
`;