import React from 'react';
import './App.css';
import Notification from "./Notification";


const App = () => {

    const text = 'Приветствую Вас! Нажмите на кнопку для выхода';

    return (
        <div>

            <Notification text={text}/>

        </div>
    );
}


export default App;
