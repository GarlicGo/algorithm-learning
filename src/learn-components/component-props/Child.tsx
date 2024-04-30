import React from 'react';

interface Props {
  data: string;
  children?: React.ReactNode;
}

export const Child: React.FC<Props> = (props) => {
  const { data, children } = props;
  return (
    <div className="example-box">
      <div>Child</div>
      <div>props data: {data}</div>
      {children}
      <button
        onClick={() => {
          console.log('Child props', props);
        }}
      >
        get props
      </button>
    </div>
  );
};
