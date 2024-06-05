import Mock from 'mockjs';

export interface PostType {
  id: string;
  title: string;
  imageUrl: string;
  avatarUrl: string;
  userName: string;
  likeNum: number;
}

export const getPostList = async (): Promise<PostType[]> => {
  return new Promise((resolve) => {
    const mockRequestTime = Math.random() * 1000 + 500;
    setTimeout(() => {
      const mock: PostType[] = Mock.mock({
        'list|10': [
          {
            id: '@id',
            title: '@csentence',
            // 随机生成不同尺寸的图片
            imageUrl: '@image',
            avatarUrl:
              'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30qsvrmgq0g105on8v487qocv1ah9aqg?imageView2/2/w/60/format/webp|imageMogr2/strip',
            userName: '@cname',
            likeNum: '@integer(0, 100)',
          },
        ],
      }).list;
      resolve(mock);
    }, mockRequestTime);
  });
};
