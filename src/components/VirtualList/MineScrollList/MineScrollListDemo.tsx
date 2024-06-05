import React, { useState } from 'react';
import { CardItem } from './components/CardItem';
import { Container } from './styles';
import { useRequest } from 'ahooks';
import { PostType, getPostList } from './data';

export const MineScrollListDemo: React.FC = () => {
  const [postList, setPostList] = useState<PostType[]>([]);

  const { run, loading } = useRequest(getPostList, {
    onSuccess(list) {
      setPostList([...postList, ...list]);
    },
  });

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    const { clientHeight, scrollHeight, scrollTop } = e.currentTarget;
    const isBottom = clientHeight + scrollTop + 50 >= scrollHeight;

    if (isBottom) {
      run();
    }
  };

  return (
    <Container onScroll={handleScroll}>
      <div>MineScrollListDemo</div>
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
      {loading && '加载中...'}
    </Container>
  );
};
