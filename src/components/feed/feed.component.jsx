import React, { useEffect, useState } from 'react';

import FeedItem from '../feed-item/feed-item.component';

import styled from 'styled-components';

import { fetchFeedAll } from '../../utils/fetch/fetch';

const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const executeFetch = async () => {
      const data = await fetchFeedAll();
      if (data.result) {
        setFeeds(data.feeds);
        setErrorMsg('');
      } else {
        setErrorMsg(data.message);
      }
    };

    executeFetch();
  }, []);

  return (
    <FeedContainer>
      {errorMsg.length === 0 ? (
        feeds.map((feed) => <FeedItem key={feed.id} feed={feed} />)
      ) : (
        <p>{errorMsg}</p>
      )}
    </FeedContainer>
  );
};

export default Feed;

const FeedContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
