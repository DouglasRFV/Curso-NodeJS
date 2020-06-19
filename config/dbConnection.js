const mysql = require('mysql');

const connMySQL = () => {
    console.log('Conexão com BD estabelecida!');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql@root1234',
        database: 'portal_noticias'
    });
}

module.exports = () => {
    console.log('O autoload carregou o módulo de conexão com BD!');
    return connMySQL;
};
