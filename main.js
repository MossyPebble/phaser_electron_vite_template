const { app, BrowserWindow } = require('electron');

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 640,
        height: 360,
    });

    mainWindow.setMenu(null);

    mainWindow.loadFile('build/index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});