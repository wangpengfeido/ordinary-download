import React, { FC, useRef } from 'react';
import Button from '@mui/material/Button';
import PageBox from 'renderer/components/page-box';
import CreateDownloadModal, { IRefCreateDownloadModal } from './create-download-modal';

const PageDownload: FC = () => {
  const refIRefCreateDownloadModal = useRef<IRefCreateDownloadModal>(null);

  return (
    <>
      <CreateDownloadModal ref={refIRefCreateDownloadModal}></CreateDownloadModal>
      <PageBox title="下载">
        <div>
          <Button
            variant="contained"
            onClick={() => {
              refIRefCreateDownloadModal.current?.openModal();
            }}
          >
            新建下载
          </Button>
        </div>
      </PageBox>
    </>
  );
};

export default React.memo(PageDownload);
