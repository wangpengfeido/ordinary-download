import React, { CSSProperties, ForwardRefRenderFunction, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  style?: CSSProperties;
}

interface IRef extends HTMLDivElement {}

const ModalBox: ForwardRefRenderFunction<IRef, IProps> = ({ children, style }, ref) => {
  return (
    <div
      ref={ref}
      tabIndex={-1}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: '#fff',
        border: '1px solid var(--app-border)',
        boxShadow: '24px',
        padding: 4,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default React.memo(React.forwardRef(ModalBox));
