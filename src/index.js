import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Piotr'},
    {id: 5, name: 'Roman'},
    {id: 6, name: 'Helga'},
];
const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'HiHi'},
    {id: 4, message: 'Piotr'},
    {id: 5, message: 'Roman'},
    {id: 6, message: 'Helga'},
];
const posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It is my first posts', likesCount:20},
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
