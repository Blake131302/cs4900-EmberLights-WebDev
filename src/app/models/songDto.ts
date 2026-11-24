export interface SongRequestDto {
    songID?: number
    songName?: string
    genreID?: number
    songDuration?: string //MariaDB TIME type
    albumID?: number
}

/*return of get
{
  "songID": 4,
  "songName": "True Colors",
  "genre": {
    "genreID": 2,
    "genreName": "Pop"
  },
  "songDuration": [
    0,
    3,
    47
  ],
  "album": {
    "albumID": 4,
    "albumName": "True Colors",
    "artistName": "Cyndi Lauper"
  }
}
  */
 export interface SongDto { //update later to use other interfaces for nested objects
    songID: number
    songName: string
    genre: {
        genreID: number
        genreName: string
    }
    songDuration: [number, number, number] //MariaDB TIME type
    album: {
        albumID: number
        albumName: string
        artistName: string
    }
 }