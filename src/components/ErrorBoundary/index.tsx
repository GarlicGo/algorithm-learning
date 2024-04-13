import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Child: React.FC = () => {
  return <div>Child</div>;
};

export const ErrorBoundary: React.FC<Props> = ({ children }) => {
  try {
    return children;
  } catch (error) {
    return <div>error</div>;
  }
};

export const ErrorBoundaryTestDemo: React.FC = () => {
  return (
    <ErrorBoundary>
      <Child />
    </ErrorBoundary>
  );
};
