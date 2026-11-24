import { Genre } from "./Genre";

export interface Playlist {
    playlistID: number;
    playlistName: string;
    genres: Genre; //replace with Genre type when we have a genre model
    creationTime: string; //e.g. 00:03:45
    numberSongs: number;
}