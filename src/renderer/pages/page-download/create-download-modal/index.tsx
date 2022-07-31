import React, { ForwardRefRenderFunction, useImperativeHandle, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

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
      <DialogContent>下载</DialogContent>
    </Dialog>
  );
};

export default React.memo(React.forwardRef(CreateDownloadModal));
