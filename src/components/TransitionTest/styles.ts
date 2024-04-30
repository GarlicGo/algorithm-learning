import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  background-color: burlywood;
  border: 1px solid black;
`;

export const CarContainer = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: greenyellow;
  border: 1px solid black;
  transition-property: left top;
  transition-timing-function: linear;
`;
