import React from 'react';

interface Props {
  classNames?: string;
  //   index: number;
  //   Component: React.FC<{ onSizeChange?: (domNode: HTMLElement | null) => void }>;
  style?: React.CSSProperties;
  //   onSizeChange?: (index: number, domNode: HTMLElement | null) => void;
  children?: React.ReactNode;
}

export const VirtualListItem: React.FC<Props> = React.memo(({ style, classNames, children }) => {
  return (
    <div className={classNames} style={{ position: 'absolute', width: '100%', ...style }}>
      {children}
    </div>
  );
});
