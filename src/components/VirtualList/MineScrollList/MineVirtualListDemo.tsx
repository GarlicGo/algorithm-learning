import React, { useState } from 'react';
import { CardItem } from './components/CardItem';
import { Container } from './styles';
import { useRequest } from 'ahooks';
import { PostType, getPostList } from './data';

export const MineVirtualListDemo: React.FC = () => {
  const [postList, setPostList] = useState<PostType[]>([]);

  const { loading } = useRequest(getPostList, {
    onSuccess(list) {
      setPostList([...postList, ...list]);
    },
  });

  return (
    <Container>
      <div>MineVirtualListDemo</div>
      {postList.length <= 0 && loading && '加载中...'}
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
    </Container>
  );
};
