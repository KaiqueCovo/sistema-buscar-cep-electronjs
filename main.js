// Importando módulos do Electron
const { app, BrowserWindow } = require('electron')

const path = require('path')

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

// Função que cria a janela do Electron
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'images/image.png',
  })

  win.loadFile('index.html')
}

// Rodando a aplicação
app.whenReady().then(() => {
  createWindow()
})