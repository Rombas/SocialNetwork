import {IdInfoType} from "../type/types";

export type InitialStateType = typeof initialState

let initialState = {
    friends: [
        {
            id: 1,
            name: 'Dimych',
            avatar: 'https://vokrug-tv.ru/pic/person/5/5/3/4/5534779888fe3ee25eb750183028cecf.jpeg'
        },
        {
            id: 2,
            name: 'Sveta',
            avatar: 'https://drivemusic.club/uploads/artists_images/artists_250/sveta_5.jpg'
        },
        {
            id: 3,
            name: 'Sasha',
            avatar: 'https://img.championat.com/c/900x900/news/big/o/l/sasha-grej-provela-strim-v-obraze-princessy-lei-iz-zvjozdnyh-vojn_1588866382278634836.jpg'
        }
    ] as Array<IdInfoType>
};

const navbarReducer = (state = initialState, action: any): InitialStateType => {
    return state;
}

export default navbarReducer