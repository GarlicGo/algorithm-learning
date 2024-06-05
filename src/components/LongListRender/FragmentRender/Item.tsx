import React, { useEffect } from 'react';
import styled from 'styled-components';
import { HOC, TransformHOCProps } from './utils';

const Container = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: yellowgreen;
  border: 1px solid #000;
  margin: 10px;
`;

interface Props {
  content?: React.ReactNode;
  waitRender: () => void;
}

export const Item: React.FC<Props> = ({ content, waitRender }) => {
  useEffect(() => {
    waitRender();
  }, []);

  return <Container>Item: {content}</Container>;
};

export const ItemHoc = HOC<TransformHOCProps<Props>>(Item);
