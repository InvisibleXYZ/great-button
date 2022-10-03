const { app, BrowserWindow, ipcMain } = require("electron");

let win = null

app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false
    });

    win.setMenu(null);
    win.loadFile("index.html");
});

ipcMain.on('clicked', (event) => {
    alert("Clicked!")
    console.log("Clicked")
    win.webContents.send('gotIt');
})

