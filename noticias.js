var http = require('http');

var server = http.createServer((req, res) => {

    var categoria = req.url;
    if(categoria === '/tecnologia'){
        res.end('<html><body>Noticias de Tecnologia</body></html>');
    } else if(categoria === '/games'){
        res.end('<html><body>Noticias de Games</body></html>');
    } else if(categoria === '/metal'){
        res.end('<html><body>Noticias de Heavy Metal</body></html>');
    } else {
        res.end('<html><body>Portal de noticias</body></html>');
    }

});

server.listen(3000);