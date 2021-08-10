import repl from 'repl'

/* command line argument
console.log(process.argv);
let a = parseInt(argv[2]);
let b = parseInt(argv[3]);
let c = parseInt(argv[4]);
let d = parseInt(argv[5]);
let e = parseInt(argv[6]);

console.log((a+b+c+d+e)/5);
*/
/* REPL command : node.js 코드를 실험하고 디버깅하는데 유용 */
// repl의 start를 실행하여 repl 객체를 생성해서, 그 안의 context만 가져옴
let repl_context = repl.start(
  {
    prompt: '$',
    input: process.stdin,
    output: process.stdout
  }
).context;

// 타이밍이 아주 중요한 함수라고 가정
function foo() {
  console.log('✨hello world✨');
}
// repl_context의 foo에다가 foo function을 mapping
repl_context.foo = foo();