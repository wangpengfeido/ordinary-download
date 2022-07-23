import { app, BrowserWindow } from 'electron';

function createWindow() {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // 使渲染进程可以使用 node api
      nodeIntegration: true,
    },
  });
  // 加载html
  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:9091');
    // 打开开发者工具
    win.webContents.openDevTools();
  } else {
    win.loadFile('index.html');
  }
}

// Electron 会在初始化后并准备创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow);

// 应用激活事件
app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，通常在应用程序中重新创建一个窗口。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// 全部窗口关闭事件。可以在其中控制是否退出程序
app.on('window-all-closed', () => {
  // 在非macOS退出应用
  // 在macOS，除非用户用 Cmd + Q 确定地退出，否则应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
