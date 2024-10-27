const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); // se configura el express para que se compartan archivos estáticos (no cambian para el usuario)

// responde a las solicitudes GET a la raíz del sitio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Definir el puerto en el que escuchará la aplicación
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El servidor está ejecutándose en http://localhost:${port}`);
});
