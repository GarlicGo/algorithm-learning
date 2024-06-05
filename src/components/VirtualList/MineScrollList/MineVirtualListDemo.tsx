import React, { useRef, useState } from 'react';
import { useRequest } from 'ahooks';
import { CardItem } from './components/CardItem';
import { Container } from './styles';
import { PostType, getPostList } from './data';
import { useMeasuredCache } from './hooks';

const CACHE_ITEM_SIZE = 4;
const ITEM_ESTIMATED_SIZE = 110;

export const MineVirtualListDemo: React.FC = () => {
  const [postList, setPostList] = useState<PostType[]>([]);
  const {} = useMeasuredCache();

  const { loading } = useRequest(getPostList, {
    onSuccess(list) {
      setPostList([...postList, ...list]);
    },
  });

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (event) => {
    const { scrollTop } = event.currentTarget;
    console.log('scrollTop', scrollTop);
  };

  return (
    <Container onScroll={handleScroll}>
      {/* <div>MineVirtualListDemo</div> */}
      {postList.map((post) => {
        return (
          <CardItem
            key={post.id}
            title={post.title}
            imageUrl={post.imageUrl}
            avatarUrl={post.avatarUrl}
            userName={post.userName}
            likeNum={post.likeNum}
          />
        );
      })}
      {postList.length <= 0 && loading && '加载中...'}
    </Container>
  );
};
