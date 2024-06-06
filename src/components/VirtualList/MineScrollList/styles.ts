import styled from 'styled-components';

export const WarpperContainer = styled.div`
  padding: 0 10px;
  border: 1px solid black;
  width: 230px;
  margin: auto;
`;

export const Container = styled.div`
  position: 'relative';
  width: 225px;
  height: 800px;
  /* border: 1px solid black; */
  margin: auto;
  will-change: transform;
  overflow-y: scroll;
  scrollbar-width: none;
`;

export const ContentContainer = styled.div`
  width: 100%;
`;
