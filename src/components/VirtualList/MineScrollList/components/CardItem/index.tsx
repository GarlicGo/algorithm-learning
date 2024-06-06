import React, { useRef } from 'react';
import { Container } from './styles';
import { HeartOutlined } from '@ant-design/icons';

interface Props {
  title?: React.ReactNode;
  imageUrl?: string;
  avatarUrl?: string;
  userName?: string;
  likeNum?: number;
  onSizeChange?: (domNode: HTMLElement | null) => void;
}

export const CardItem: React.FC<Props> = React.memo(({ title, imageUrl, avatarUrl, userName, likeNum, onSizeChange }) => {
  const domRef = useRef<HTMLDivElement | null>(null);

  return (
    <Container
      ref={(domNode) => {
        if (domNode && !domRef.current) {
          onSizeChange?.(domNode);
          domRef.current = domNode;
        }

        // if (!domNode && domRef.current) {
        //   onSizeChange?.(null);
        //   domRef.current = null;
        // }
      }}
    >
      <img
        className="card-item-img"
        src={imageUrl}
        onLoad={() => {
          onSizeChange?.(domRef.current);
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
