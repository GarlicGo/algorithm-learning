import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
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
  style: React.CSSProperties;
  content?: React.ReactNode;
}

export const Item: React.FC<Props> = ({ index, style }) => {
  return (
    <div style={{ ...style }}>
      <Container>Item: {index}</Container>
    </div>
  );
};
