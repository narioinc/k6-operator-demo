import * as stress from "./requests/stress-test.js"

export let options = {
      //vus: 1,
      //duration: '10s'
    };

export default function () {
    stress.stress();
    stress.log();
}