/* tcp server */
// net -> http, ftp, ssh
import net from 'net';

const port = 8070;

//8070 port로 사용자가 접속하길 기다림
const tcp_server = net.createServer((_client) => {
  // packet(= data를 받을 수 있는 구멍) 처리
  _client.on('data', (playload) => {
    // playload에 data가 담겨있음
    console.log(playload + "");

    // 응답
    _client.write('ok');
    _client.destroy();
  });

  // 접속이 끊겼을 때
  _client.on('close', () => {
    console.log('closed');
  });

}).listen(port);

console.log(`server listen ${port}`);