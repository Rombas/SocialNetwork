import './index.css';
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateMessageArea, updateTextArea} from "./redux/state";

const rerenderEntirePage = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updateTextArea={updateTextArea}
                addMessage={addMessage}
                updateMessageArea={updateMessageArea}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntirePage(state);
subscribe(rerenderEntirePage);