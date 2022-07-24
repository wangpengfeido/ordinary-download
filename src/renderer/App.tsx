import React, { FC } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const App: FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex' }}>
      <Drawer variant="permanent" open={true}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <FileDownloadIcon></FileDownloadIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      dsf
    </div>
  );
};

export default App;
