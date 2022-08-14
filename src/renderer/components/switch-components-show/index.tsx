import React, { CSSProperties, FC, ReactNode } from 'react';

interface IProps {
  current?: string | number;
  components: Array<{
    key: string | number;
    component: ReactNode;
    style?: CSSProperties;
  }>;
}

const SwitchComponentsShow: FC<IProps> = ({ current, components }) => {
  return (
    <>
      {components.map(({ key, component, style }) => {
        return (
          <div key={key} style={{ display: current === key ? 'block' : 'none', ...style }}>
            {component}
          </div>
        );
      })}
    </>
  );
};

/** 多个组件间的展示切换 */
export default React.memo(SwitchComponentsShow);
