const express = require('express')
const app = express()

const archivoBD = require('./conexion')

app.get('/', (req, res) => {
  res.end('Bienvenidos al servidor Node.js')
})

app.listen(4000, function(){
  console.log('El servidor de node está corriendo correctamente')
})