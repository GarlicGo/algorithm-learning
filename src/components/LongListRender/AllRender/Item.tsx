import React from 'react';
import styled from 'styled-components';

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
}

export const Item: React.FC<Props> = ({ content }) => {
  return <Container>Item: {content}</Container>;
};
