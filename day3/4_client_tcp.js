import net from 'net';

const host = 'localhost';
const port = 8070;

// 스스로 socket 생성
const socket = new net.Socket();

// 접속시도
socket.connect(port, host, () => {
  // 접속 성공 시..
  // client가 말을 걺
  socket.write('hello\r\n', 'utf-8', () => {
    //send ok 
    console.log('send message');
  });
});

socket.on('data', (playload) => {
  console.log('recv from server : ' + playload);
});

socket.on('close', () => {
  console.log('close');
});