import moment from 'moment';
import { addSongRequest } from '../repository/songRequestRepository';

export async function addSonRequestService(song, isAddingSong = false) {
    try {
        let payload = {};

        if (isAddingSong) {
            console.log('Is adding...');
            payload = {
                songRequestId: '',
                songId: null,
                songName: song.songName,
                songArtist: song.songArtist,
                isForAddingNewSong: true,
                isForPlayingSong: false,
                songRequestDate: moment().toDate(),
            }
        } else {
            payload = {
                songRequestId: '',
                songId: song.songId,
                songName: null,
                songArtist: null,
                isForAddingNewSong: false,
                isForPlayingSong: true,
                songRequestDate: moment().toDate(),
            }
        }

        await addSongRequest(payload);
    } catch (error) {
        console.log(error);
    }
}