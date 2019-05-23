var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res) {

//Check which type of file is being served
  var fPath = path.join(
    __dirname,
    req.url === "/" ? "templates/index.html" : req.url
  );
  var extension = path.extname(fPath);
  var contentType = "text/html";
  switch (extension) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".ico":
      contentType = "image/x-icon";
      break;
  }

	fs.readFile(
		fPath,
		function(err, data) {
			if(err) {
				if (err.code == "ENOENT") {
					fs.readFile(
						path.join(__dirname, 'public', "templates/404.html"),
						function(err, page) {
							res.writeHead(200, {'Content-type' : 'text/html'});
							res.end(page, 'utf8');
						})
				} else {
					res.writeHead(500);
					res.end(`Something went wrong, please try again. Error code: ${err.code}`)
				}
			} else {
				res.writeHead(200, {'Content-type' : contentType}),
				res.end(data);
			}
		});

});
var port = process.env.PORT || 3000;
server.listen(port, function() {
		console.log('Server started on port '+port);
});
