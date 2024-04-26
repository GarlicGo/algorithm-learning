import styled from 'styled-components';

export const ViewContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  overflow: hidden;
`;

export const CanvasContainer = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  background-color: yellowgreen;
  /* left: -40px;
   top: 80px; */
  /* transform-origin: 100px 100px; */
  /* transform-origin: 200px 200px; */
  /* transform: 'scale(0.5)' */
`;

export const Item = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: blue;
`;
