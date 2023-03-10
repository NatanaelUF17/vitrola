import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/song-request';

export function addSongRequest(payload) {
    return axios.post(apiUrl, payload);
}