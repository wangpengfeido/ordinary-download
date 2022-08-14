import React, { ForwardRefRenderFunction, useImperativeHandle } from 'react';
import Button from '@mui/material/Button';

interface IPropsSystemFolderSelect {
  value?: string;
  onChange?: (value: string) => void;
}

interface IRefSystemFolderSelect {}

const SystemFolderSelect: ForwardRefRenderFunction<
  IRefSystemFolderSelect,
  IPropsSystemFolderSelect
> = (props, ref) => {
  const { value, onChange } = props;

  useImperativeHandle(ref, () => ({}));

  return (
    <div>
      <div>
        <Button
          size="small"
          onClick={async () => {
            const res = await window.ordinary_download_api.selectFolder();
            if (res) {
              onChange?.(res);
            }
          }}
        >
          {value || '点击选择文件夹'}
        </Button>
      </div>
    </div>
  );
};

/** 选择系统文件夹 */
export default React.memo(React.forwardRef(SystemFolderSelect));

// import React, { ForwardRefRenderFunction, useImperativeHandle } from 'react';

// interface IPropsComponentName {
// }

// export interface IRefComponentName {}

// const ComponentName: ForwardRefRenderFunction<IRefComponentName, IPropsComponentName> = (props, ref) => {
//   useImperativeHandle(ref, () => ({}));

//   return <></>;
// };

// export default React.memo(React.forwardRef<IRefComponentName, IPropsComponentName>(ComponentName));
