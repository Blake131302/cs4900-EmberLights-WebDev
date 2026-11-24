export interface Song {
  songID: number;
  songName: string;
  genre: {
    genreID: number;
    genreName: string;
  };
  songDuration: number[] | string;
  album: {
    albumID: number;
    albumName: string;
    artistName: string;
  };
}

export interface SongRequestDto {
  songName: string;
  genreID: number;
  songDuration: string;
  albumID: number;
}
/** from Sam's branch hw6
 * export interface Song {
    id: number;
    name: string;
    genre: string; //replace with Genre type when we have a genre model
    duration: string; //e.g. 00:03:45
    album: string; //Replace with Album type when we have an album model
    artist: string; //Will be retrieved from the album model when we have one, but for now we will just use a string
}
 */