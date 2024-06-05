import * as React from 'react';

interface SimpleProps<T extends string> {
  random: T;
}

interface Props {
  children: React.ReactNode;
  color: string;
}

function WithGenericsButton<T extends string>(
  props: Props & SimpleProps<T> & { ref: React.Ref<HTMLButtonElement> },
) {
  type CombinedProps = Props & SimpleProps<T>;
  const Button = React.forwardRef<HTMLButtonElement, CombinedProps>(
    ({ children, ...otherProps }, ref) => (
      <button ref={ref} className="FancyButton" {...otherProps}>
        {children}
      </button>
    ),
  );
  return <Button {...props} />;
}

const App: React.FC = () => {
  const ref = React.useRef<HTMLButtonElement>(null);
  return (
    <WithGenericsButton<string> ref={ref} color="green" random="foo">
      Click me!
    </WithGenericsButton>
  );
};
