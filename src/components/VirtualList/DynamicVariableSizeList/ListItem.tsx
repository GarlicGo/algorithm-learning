import React from 'react';

interface Props {
  index: number;
  style: React.CSSProperties;
  ComponentType: React.FC<{ index: number; onSizeChange?: (index: number, domNode: HTMLElement) => void }>;
  onSizeChange?: (index: number, domNode: HTMLElement) => void;
}

export const ListItem: React.FC<Props> = ({ index, style, ComponentType, onSizeChange }) => {
  return (
    <div style={style}>
      <ComponentType index={index} onSizeChange={onSizeChange} />
    </div>
  );
};
