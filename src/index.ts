import http from 'http';
import url from 'url';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || '4500';

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
      if (!req.url) {
        server.emit('error', new Error('Error 404'));
        return;
      }

      // if (!url.parse(req.url)) {
      //   server.emit('error', new Error('Error 404'));
      //   return;
      // }
      const parseURL = url.parse(req.url);

      if (!parseURL.pathname) {
        server.emit('error', new Error('Error 404'));
        return;
      }
      const pathname = parseURL.pathname;
      if (!parseURL.query) {
        server.emit('error', new Error('Error 404'));
        return;
      }

      const query = parseURL.query;
      const parseQuery = query.split('&');
      const varAwithEqual: string = parseQuery[0];
      const a = +varAwithEqual.substring(2, 10);

      const varBwithEqual: string = parseQuery[1];
      const b = +varBwithEqual.substring(2, 10);

      // Con desesstructuración sería lo mismo que:       // const{pathname}=url.parse(req.url)        resp.write('Hello Server GET tu pathname es' + patname);       server.emit('error', new Error('Invalid URL'));

      // res.write('Hello world');
      // getAllKnowledge();

      const calculator = () => {
        let sum = a + b;
        let res = a - b;
        let mult = a * b;
        let div = a / b;

        return (
          ` a+b= ` + sum + ` a-b= ` + res + ` a*b= ` + mult + ` a/b= ` + div
        );
      };

      calculator();

      res.write(
        `Has introducido el número${a} y el número ${b}/n${calculator()}`
      );
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
