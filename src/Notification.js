import React from 'react';
import './notification.css'

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classWin: 'hide',
            classBtn:'button',
            title: 'Показать модальное окно',
        }
    }
    showWindow(){
        this.setState({classWin:'modalWrap'});
        this.setState({classBtn:'hide'})
this.setState({title:'Скрыть модальное окно'})

    }
    hideBlock(e){
        this.setState({classBtn:'button'});
        if (e.target.className === 'modalWin' || e.target.className === 'modalWin_text') {
            this.showWindow()

        } else {
            this.setState({classWin:'hide'})
            this.setState({title:'Показать модальное окно'})
        }

    }
    render() {
        const hideBlock= this.hideBlock.bind(this)
        return (



            <div className="app">
                <h1>{this.state.title}</h1>

                <button className={this.state.classBtn} onClick={this.showWindow.bind(this)}>Модальное окно</button>

                <div className={this.state.classWin} onDoubleClick={hideBlock}>
                    <div className='modalWin'>
                        <div className="modalWin_cross" ><span
                            className="crossRed" onClick={hideBlock}>&#10006;</span>
                        </div>
                        <div className="modalWin_text">
                            {this.props.text}
                        </div>
                        <div className="buttonClose" onClick={hideBlock}>Да</div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Notification;