import axios from 'axios';

// promise 객체를 반환함
axios.get('http://localhost:8090/echo?title=hello&msg=nodejs')
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    })