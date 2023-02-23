import http from 'http';
import url from 'url';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || '4500';

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
      res.write('Hello world');
      // getAllKnowledge();
      break;
    case 'POST':
      break;
    case 'PATCH':
      break;
    case 'DELETE':
      break;
    default:
      '';
  }

  res.end();
});

server.on('listening', () => {
  console.log('listening on ' + PORT);
});
server.listen(PORT);
