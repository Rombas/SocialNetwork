import './index.css';
import state, {store} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rerenderEntirePage = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntirePage(state);
store.subscribe(rerenderEntirePage);