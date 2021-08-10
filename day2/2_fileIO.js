// file system을 가져옴
import fs from "fs";
import { argv } from 'process';

/* 출력 스트림의 최송 종착지 = out.txt */
function writeFile() {
  const dest = fs.createWriteStream('out.txt');
  const src = process.stdin;
  
  // 입력을 받아서 out.txt로 출력하라
  src.pipe(dest);
}

/* out.txt에 있는 내용을 console에 출력 */
function readFile() {
  const src = fs.createReadStream('out.txt');
  const dest = process.stdout;
 
  src.pipe(dest);
}

/* hello라는 문자를 test.txt에 작성 (비동기식) */
function asynWrite() {
  // 결과 : done -> ok
  fs.writeFile(
    'test.txt',
    'hello', 
    {
    encoding: 'utf-8'
    },
    (err) => {
      if(err) { console.log(err); }
      else { console.log('OK'); }
    }
  );
  console.log('done');
}

/* 4. 입출력이 다 끝난 다음에 done 출력 (동기식) */
function syncWrite() {
  fs.writeFileSync(
    'text.txt',
    'hello2',
    {
      encoding:'utf-8'
    });
  console.log('done');
}

/* text.txt에 있는 내용을 읽어서 console에 출력 (동기식)*/
function synRead() {
  let data = fs.readFileSync('test.txt',
              {
                encoding: 'utf-8'
              }
            );
  console.log(data);
}

/* text.txt에 있는 내용을 읽어서 출력 (비동기식)*/
function asynRead() {
  fs.readFile('test.txt',
    {
      encoding: 'utf-8'
    },
    (err, data) => {
      if(err) { 
        console.log(err); 
      }
      else { 
        console.log('OK'); 
        console.log(data);
      }
    }
  );
}

