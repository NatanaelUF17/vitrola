import { addSongRequest } from '../repository/songRequestRepository';

export async function addSonRequestService(payload) {
    try {
        await addSongRequest(payload);
    } catch (error) {
        console.log(error);
    }
}