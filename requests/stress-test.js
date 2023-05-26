
// stress-test.js
import { sleep, check } from 'k6';
import http from 'k6/http';


export function stress(){
  const res = http.get('https://test-api.k6.io');
  check(res, {
    'status is 200': () => res.status === 200,
  });
  sleep(1);
};

export function log(){
    console.log("test")
}