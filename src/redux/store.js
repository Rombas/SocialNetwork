import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";

export let store;
store = {
    _state: {
        dialogsPage: {
            newMessageText: 'enter',
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'HiHi'},
                {id: 4, message: 'Piotr'},
                {id: 5, message: 'Roman'},
                {id: 6, message: 'Helga'},
            ],
            dialogs: [
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
                },
                {
                    id: 4,
                    name: 'Piotr',
                    avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Piotr_Adamczyk_2012.jpg'
                },
                {
                    id: 5,
                    name: 'Roman',
                    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Roman_Reigns_Tribute_to_the_Troops_2016.jpg/1200px-Roman_Reigns_Tribute_to_the_Troops_2016.jpg'
                },
                {
                    id: 6,
                    name: 'Helga',
                    avatar: 'https://cdn.vox-cdn.com/thumbor/8h7ipgJo5zr-bTF-RLqjSuzz2Q0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9410113/MTS_simgazer_1589392_Helga.jpg'
                },
            ]
        },
        profilePage: {
            newPostText: 'enter',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It is my first posts', likesCount: 20},
            ]
        },
        navbar: {
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
            ]
        }
    },
    _rerenderEntirePage() {

    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntirePage = observer;
    },
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._rerenderEntirePage(this._state);

    }
}


export default store;