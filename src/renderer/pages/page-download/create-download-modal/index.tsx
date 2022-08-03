import React, { ForwardRefRenderFunction, useImperativeHandle, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

interface IProps {}

export interface IRefCreateDownloadModal {
  openModal: () => void;
}

const CreateDownloadModal: ForwardRefRenderFunction<IRefCreateDownloadModal, IProps> = (
  props,
  ref,
) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => {
        setVisible(true);
      },
    };
  });

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={visible}
      onClose={() => {
        setVisible(false);
      }}
    >
      <DialogTitle>新建下载</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
          {/* <Input></Input> */}
          <input></input>
          {/* <div
            onClick={async () => {
              const res = await window.ordinary_download_api.openFile();
              console.log('-----------------', res);
            }}
          >
            选择文件
          </div> */}
        </FormControl>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(React.forwardRef(CreateDownloadModal));
