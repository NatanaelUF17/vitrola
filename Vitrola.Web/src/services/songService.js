import { getSongById, getSongs } from '../repository/songRepository';

export async function getSongsService() {
    try {
        const response = await getSongs();
        if (response) return response.data;

        return [];
    } catch (error) {
        console.log(error);
    }
}

export async function getSongByIdService(id) {
    try {
        const response = await getSongById(id);
        if (response) return response.data;

        return {};
    } catch (error) {
        console.log(error);
    }
}