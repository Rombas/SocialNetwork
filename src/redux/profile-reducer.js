const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_AREA = 'UPDATE-TEXT-AREA';

let initialState = {
    newPostText: 'enter',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first posts', likesCount: 20},
    ]
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_TEXT_AREA: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostAction = () => ({type: ADD_POST});
export const updateTextAreaAction = (postText) =>
    ({type: UPDATE_TEXT_AREA, newText: postText});

export default profileReducer;