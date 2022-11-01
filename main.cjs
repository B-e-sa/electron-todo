const { create } = require('domain')
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadURL("http://localhost:5173/")
    win.on('close', (event) => {
        if (app.quitting) {
            win.null
        } else {
            event.preventDefault()
            win.hide()
        }
    })
}

app.whenReady().then(() => {
    createWindow()
    app.on("active", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow
        }
    })
})

app.on("window-all=closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})