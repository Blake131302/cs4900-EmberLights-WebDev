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