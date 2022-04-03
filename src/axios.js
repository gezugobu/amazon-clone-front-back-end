
import axios from 'axios';
const instance = axios.create({
  // THE API (cloud function) URL
  // baseURL: 'http://localhost:5001/clone-front-end-ea256/us-central1/api', before
  baseURL:'https://us-central1-clone-front-end-ea256.cloudfunctions.net/api', //after
});
export default instance;