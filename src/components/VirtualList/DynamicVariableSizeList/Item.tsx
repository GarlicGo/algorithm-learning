import React, { useMemo, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: yellowgreen;
  border: 1px solid #000;
`;

interface Props {
  index: number;
  onSizeChange?: (index: number, domNode: HTMLElement) => void;
}

export const Item: React.FC<Props> = React.memo(({ index, onSizeChange }) => {
  const domRef = useRef<HTMLDivElement | null>(null);
  const height = useMemo(() => 50 + Math.round(Math.random() * 80), []);

  return (
    <Container
      ref={(domNode) => {
        if (domNode && !domRef.current) {
          onSizeChange?.(index, domNode);
          domRef.current = domNode;
        }
      }}
      style={{
        height,
      }}
    >
      Item: {index}
    </Container>
  );
});
