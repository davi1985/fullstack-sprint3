const http = require('http'),
  app = require('./config/express');

http.createServer(app).listen(3000, function () {
  console.log(`Server is running in: http://localhost:${this.address().port}`);
});
