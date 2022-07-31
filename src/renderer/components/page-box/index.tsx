import React, { FC, ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

interface IProps {
  title: ReactNode;
  children: ReactNode;
}

const PageBox: FC<IProps> = ({ title, children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar style={{ minHeight: 48 }}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div
        style={{
          flexGrow: 1,
          padding: 'var(--app-margin-1)',
          width: '100%',
          height: '100%',
          overflow: 'auto',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default React.memo(PageBox);
