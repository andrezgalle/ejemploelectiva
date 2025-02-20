import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('<html><body><h1>Hola Mundo</h1></body></html>');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});