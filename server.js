const app = require('./app');

app.set('port',3000);
const server = app.listen(app.get('port'),() => {
    console.log("Servidor rodando na porta: " + server.address().port);
});