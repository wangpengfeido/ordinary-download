import React, { ForwardRefRenderFunction, useImperativeHandle, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import DialogActions from '@mui/material/DialogActions';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm, Controller } from 'react-hook-form';
import SystemFolderSelect from 'renderer/components/form-widget/system-folder-select';
import { FormHelperText } from '@mui/material';

interface IFormCreateDownload {
  downloadSrcCode: string;
  targetFolder: string;
}

interface IProps {}

export interface IRefCreateDownloadModal {
  openModal: () => void;
}

const CreateDownloadModal: ForwardRefRenderFunction<IRefCreateDownloadModal, IProps> = (
  props,
  ref,
) => {
  const [visible, setVisible] = useState(false);

  const { control, handleSubmit } = useForm<IFormCreateDownload>();

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
        <Controller
          control={control}
          name="downloadSrcCode"
          rules={{ required: '请输入' }}
          render={({ field, fieldState }) => {
            return (
              <FormControl style={{ marginTop: 8 }} fullWidth error={!!fieldState.error}>
                <InputLabel required>创建下载源</InputLabel>
                <OutlinedInput
                  id="download-src-code"
                  label="创建下载源*"
                  multiline
                  {...field}
                ></OutlinedInput>
                {!!fieldState.error && <FormHelperText>{fieldState.error.message}</FormHelperText>}
              </FormControl>
            );
          }}
        ></Controller>
        <Controller
          control={control}
          name="targetFolder"
          rules={{ required: '请选择' }}
          render={({ field, fieldState }) => (
            <FormControl style={{ marginTop: 8 }} fullWidth error={!!fieldState.error}>
              <FormLabel required>下载至</FormLabel>
              <SystemFolderSelect {...field}></SystemFolderSelect>
              {!!fieldState.error && <FormHelperText>{fieldState.error.message}</FormHelperText>}
            </FormControl>
          )}
        ></Controller>
      </DialogContent>
      <DialogActions>
        <LoadingButton
          variant="contained"
          onClick={() => {
            handleSubmit(data => {
              console.log('11111111111111', data);
            })();
          }}
        >
          确定
        </LoadingButton>
        <LoadingButton
          variant="outlined"
          onClick={() => {
            setVisible(false);
          }}
        >
          取消
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default React.memo(React.forwardRef(CreateDownloadModal));
