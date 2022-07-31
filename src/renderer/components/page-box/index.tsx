import React, { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const PageBox: FC<IProps> = ({ children }) => {
  return (
    <div style={{ padding: 'var(--app-margin-1)', width: '100%', height: '100%' }}>{children}</div>
  );
};

export default React.memo(PageBox);
