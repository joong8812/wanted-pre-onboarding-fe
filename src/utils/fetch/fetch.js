export const fetchFeedAll = async () => {
  try {
    const response = await fetch('/data/feed.json');
    const feedData = await response.json();

    return { result: true, ...feedData };
  } catch (error) {
    console.log('error', error);
    return { result: false, message: '피드 글을 가져오지 못했습니다' };
  }
};
