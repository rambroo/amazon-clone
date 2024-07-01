import axios from 'axios';

const instance=axios.create({
    baseURL: `https://us-central1-clone-challenge-6187e.cloudfunctions.net/api`,
});
export default instance;                            