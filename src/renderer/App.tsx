import React, { FC, useState } from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import InventoryIcon from '@mui/icons-material/Inventory';
import PageDownload from './pages/page-download';
import SwitchComponentsShow from './components/switch-components-show';

const StyledDrawer = styled(Drawer)(({ theme }) => {
  return {
    width: `calc(${theme.spacing(7)} + 1px)`,
  };
});

enum EAppTabs {
  'download',
  'tool_box',
}

const PAGE_COMPONENT_STYLE = {
  width: '100%',
  height: '100%',
};

const App: FC = () => {
  const [appTab, setAppTab] = useState<EAppTabs>(EAppTabs.download);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex' }}>
      <StyledDrawer variant="permanent">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setAppTab(EAppTabs.download);
              }}
            >
              <FileDownloadIcon></FileDownloadIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setAppTab(EAppTabs.tool_box);
              }}
            >
              <InventoryIcon></InventoryIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </StyledDrawer>
      <div style={{ width: 0, flexGrow: 1 }}>
        <SwitchComponentsShow
          current={appTab}
          components={[
            {
              key: EAppTabs.download,
              component: <PageDownload></PageDownload>,
              style: PAGE_COMPONENT_STYLE,
            },
            { key: EAppTabs.tool_box, component: <div>tool_box</div>, style: PAGE_COMPONENT_STYLE },
          ]}
        ></SwitchComponentsShow>
      </div>
    </div>
  );
};

export default App;
