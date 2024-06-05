import React, { useRef, useState } from 'react';
import { ViewContainer, CanvasContainer, Item } from './styles';

export const CanvasTest: React.FC = () => {
  const isMouseDownRef = useRef(false);
  const preMouseClient = useRef<{ x: number; y: number } | null>(null);
  const [scaleNumber, setScaleNumber] = useState(1);
  const [currentMousePosition, setCurrentMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [currentCanvasPosition, setCurrentCanvasPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <ViewContainer
      onWheel={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setCurrentMousePosition({
          x,
          y,
        });

        if (e.deltaY > 0) {
          setScaleNumber(Math.min(scaleNumber + 0.1, 3));
        } else {
          setScaleNumber(Math.max(scaleNumber - 0.1, 0.2));
        }
      }}
      onMouseDown={() => {
        console.log('onMouseDown');
        isMouseDownRef.current = true;
      }}
      onMouseUp={() => {
        console.log('onMouseUp');
        isMouseDownRef.current = false;
        preMouseClient.current = null;
      }}
      onMouseMove={(e) => {
        if (!isMouseDownRef.current) {
          return;
        }

        if (!preMouseClient.current) {
          preMouseClient.current = {
            x: e.clientX,
            y: e.clientY,
          };
          return;
        }

        const deltaX = e.clientX - preMouseClient.current.x;
        const deltaY = e.clientY - preMouseClient.current.y;

        setCurrentCanvasPosition({
          x: currentCanvasPosition.x + deltaX,
          y: currentCanvasPosition.y + deltaY,
        });

        preMouseClient.current = {
          x: e.clientX,
          y: e.clientY,
        };
      }}
    >
      <CanvasContainer
        style={{
          left: `${currentCanvasPosition.x}px`,
          top: `${currentCanvasPosition.y}px`,
          transform: `scale(${scaleNumber})`,
          transformOrigin: `${currentMousePosition.x}px ${currentMousePosition.y}px`,
        }}
      >
        <Item
          style={{
            top: '40px',
            left: '50px',
          }}
        >
          1
        </Item>
      </CanvasContainer>
      {/* <div
        style={{
          position: 'absolute',
          top: `${currentMousePosition.y}px`,
          left: `${currentMousePosition.x}px`,
          width: '50px',
          height: '50px',
          backgroundColor: 'red',
        }}
      >
        1
      </div> */}
    </ViewContainer>
  );
};
