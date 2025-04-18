const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    playVideo: () => ipcRenderer.invoke('play-video')
});
