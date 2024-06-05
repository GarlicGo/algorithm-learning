import React, { useRef } from 'react';
import { Container } from './styles';
import { HeartOutlined } from '@ant-design/icons';

interface Props {
  title?: React.ReactNode;
  imageUrl?: string;
  avatarUrl?: string;
  userName?: string;
  likeNum?: number;
  onRendered?: (domNode: HTMLElement) => void;
}

export const CardItem: React.FC<Props> = React.memo(({ title, imageUrl, avatarUrl, userName, likeNum, onRendered }) => {
  const domRef = useRef<HTMLDivElement | null>(null);

  return (
    <Container
      ref={(domNode) => {
        domNode && onRendered?.(domNode);
        domRef.current = domNode;
      }}
    >
      <img
        className="card-item-img"
        src={imageUrl}
        onLoad={() => {
          domRef.current && onRendered?.(domRef.current);
        }}
      />
      <div className="card-item-title">{title}</div>
      <div className="card-item-bottom">
        <div className="card-item-bottom-user">
          <div
            className="card-item-bottom-user-avatar"
            style={{
              backgroundImage: `url(${avatarUrl})`,
            }}
          />
          <div className="card-item-bottom-user-name">{userName}</div>
        </div>
        <div className="card-item-bottom-like">
          <HeartOutlined />
          <div className="card-item-bottom-like-num">{likeNum}</div>
        </div>
      </div>
    </Container>
  );
});
