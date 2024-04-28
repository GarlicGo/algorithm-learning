import React from 'react';

interface Props {
  content?: string;
}

export const ForwardRefTestApp: React.FC<Props> = (props, ref) => {
  console.log(props, ref);
  const { content } = props;

  return (
    <div>
      <div>ForwardRefTest</div>
      <div>{content}</div>
    </div>
  );
};

export const ForwardRefTestAppRef: React.FC<Props> = React.forwardRef(
  (props, ref) => {
    console.log(props, ref);
    const { content } = props;

    return (
      <div>
        <div>ForwardRefTest</div>
        <div>{content}</div>
      </div>
    );
  },
);
