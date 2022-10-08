const electron = require('electron')

let window;
function create(){
window = new electron.BrowserWindow({
    width: 1080,
    minWidth: 680,
    height: 840,
    title: electron.app.getName(),
    webPreferences: {
      nodeIntegration: true,
      "devTools": true,
      "sandbox": true
    },
    "autoHideMenuBar": true,
    "backgroundColor": "black",
    "fullscreen": false,
    "icon": "download.png"
})
//window.setIcon(__dirname + "/images.png")
window.loadURL("https://1v1.lol")
//window.setFullScreen(true)
window.setClosable(true)

}
electron.app.on("ready" , () =>{
create()
})