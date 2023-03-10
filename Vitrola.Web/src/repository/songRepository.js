import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/song';

export function getSongs() {
    return axios.get(apiUrl);
}

export function getSongById(id) {
    return axios.get(`${apiUrl}/${id}`);
}