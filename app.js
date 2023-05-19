const express = require("express");

const router = express.Router();

const app = express();

const handleRoute = (req, res) => {
    let filePath;
    switch (req.path) {
        case '/':
            filePath = '/view/index.html';
            break;
        case '/contatos':
            filePath = '/view/contato.html';
            break;
        case '/produtos':
            filePath = '/view/produto.html';
            break;
        case '/catalogos':
            filePath = '/view/catalogo.html';
            break;
        case '/abertura/tipoDocx':
            filePath = '/recursos/arquivo.docx';
            break;
        case '/abertura/tipoJPEG':
            filePath = '/recursos/arquivo.jpeg';
            break;
        case '/abertura/tipoJson':
            filePath = '/recursos/arquivo.json';
            break;
        case '/abertura/tipoMD':
            filePath = '/recursos/arquivo.md';
            break;
        case '/abertura/tipoMp3':
            filePath = '/recursos/arquivo.mp3';
            break;
        case '/abertura/tipoMp4':
            filePath = '/recursos/arquivo.mp4';
            break;
        case '/abertura/tipoPDF':
            filePath = '/recursos/arquivo.pdf';
            break;
        default:
            filePath = '/view/404.html';
    }
  
    res.sendFile(__dirname + filePath);
};
  
router.get('*', handleRoute);
  
app.use('/', router);

module.exports = app;