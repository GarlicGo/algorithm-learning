import React, { useImperativeHandle } from 'react';

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

export type ForwardType = {
  fn: () => void;
};

export const ForwardRefTestAppRef = React.forwardRef<ForwardType, Props>(
  (props, ref) => {
    console.log(props, ref);
    const { content } = props;

    useImperativeHandle(ref, () => {
      return {
        fn: () => {
          console.log('fn');
        },
      };
    });

    return (
      <div>
        <div>ForwardRefTest</div>
        <div>{content}</div>
      </div>
    );
  },
);

export const ForwardRefTestAppRefV2 = (
  props: Props & { ref?: React.Ref<HTMLButtonElement | null> },
) => {
  const Button = React.forwardRef<HTMLButtonElement | null, Props>(
    (props, ref) => {
      return (
        <button ref={ref} className="FancyButton" {...props}>
          1
        </button>
      );
    },
  );
  return <Button {...props} ref={props.ref} />;
};
