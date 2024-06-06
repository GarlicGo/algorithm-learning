import React, { Profiler, ProfilerOnRenderCallback, useRef, useState } from 'react';
import { useRequest } from 'ahooks';
import { CardItem } from './components/CardItem';
import { Container, ContentContainer } from './styles';
import { PostType, getPostList } from './data';
import { useMeasuredCache, useRefresh } from './hooks';
import { VirtualListItem } from './components/VirtualListItem';

export const MineVirtualListDemo: React.FC = () => {
  const scrollOffsetRef = useRef<number>(0);
  const [postList, setPostList] = useState<PostType[]>([]);
  const { getCacheList, getContentHeight, calculateOffsetHeight, setCacheNode, getRenderRange, getCacheNode } =
    useMeasuredCache();
  const refresh = useRefresh();

  const { loading, run } = useRequest(getPostList, {
    onSuccess(list) {
      setPostList([...postList, ...list]);
    },
  });

  const handleSizeChange = (index: number, domNode: HTMLElement | null) => {
    if (!domNode) {
      // 元素被移除，此时不删除缓存，因为可能会再次渲染
      return;
    }

    // 该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数
    const height = domNode.offsetHeight;
    const offsetHeight = calculateOffsetHeight(index);
    setCacheNode(index, {
      height,
      offsetHeight,
    });
    refresh();
  };

  const getRenderList = () => {
    const { startIndex, endIndex } = getRenderRange(scrollOffsetRef.current, 800, postList.length);
    const items: React.ReactNode[] = [];
    for (let i = startIndex; i <= endIndex; i++) {
      const post: PostType | undefined = postList[i];
      if (!post) {
        continue;
      }
      const itemCache = getCacheNode(i);

      const itemStyle = {
        height: itemCache?.height,
        top: itemCache?.offsetHeight,
      };
      items.push(
        <VirtualListItem key={post.id} classNames={`${i}`} style={itemStyle}>
          <CardItem
            title={post.title}
            imageUrl={post.imageUrl}
            avatarUrl={post.avatarUrl}
            userName={post.userName}
            likeNum={post.likeNum}
            onSizeChange={(domNode) => {
              handleSizeChange(i, domNode);
            }}
          />
        </VirtualListItem>,
      );
    }
    return items;
  };

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (event) => {
    const { clientHeight, scrollHeight, scrollTop } = event.currentTarget;
    const isBottom = clientHeight + scrollTop + 50 >= scrollHeight;
    scrollOffsetRef.current = scrollTop;

    if (isBottom) {
      run();
    }

    refresh();
  };

  const handleRender: ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    // console.log('FragmentRender', { id, phase, actualDuration, baseDuration, startTime, commitTime });
  };

  return (
    <Profiler id="mine-v-list" onRender={handleRender}>
      <button onClick={() => refresh()}>refresh</button>
      <button onClick={() => console.log(getCacheList())}>get all cache</button>
      <Container onScroll={handleScroll}>
        <ContentContainer
          style={{
            height: getContentHeight(),
          }}
        >
          {getRenderList()}
        </ContentContainer>
        {loading && '加载中...'}
      </Container>
    </Profiler>
  );
};
