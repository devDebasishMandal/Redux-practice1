import { CLICKED_SONG } from "./actionTypes";


export const clicked_song =(song)=>{
    return {
        type:CLICKED_SONG,
        payload:song
    }
}
