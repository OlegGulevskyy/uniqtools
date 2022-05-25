import React from 'react';

type MainContainerPropsType = {
  children: React.ReactNode;
};
export const Component: React.FC<MainContainerPropsType> = ({ children }) => {
  return <div>{children}</div>;
};
