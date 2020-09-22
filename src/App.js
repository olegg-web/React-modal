import React, {Component} from 'react';
import './App.css';
import Notification from "./Notification";


    class App extends Component {
        constructor(props) {
            super(props)
            this.state = {
       text:'Приветствую Вас! Нажмите на кнопку для выхода'
            }
        }
        render() {
            return (
                <div>
                    <Notification text={this.state.text}/>
                </div>
            );
        }
    }

export default App;
