export interface Playlist {
    id: number;
    name: string;
    genre: string; //replace with Genre type when we have a genre model
    creation: string; //e.g. 00:03:45
    songs: number;
}