const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 7,
                message: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        case UPDATE_MESSAGE_AREA:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
}

export const addMessageAction = () => ({type: ADD_MESSAGE});
export const updateMessageAreaAction = (newMessage) =>
    ({type: UPDATE_MESSAGE_AREA, newText: newMessage});

export default dialogsReducer;