import React from 'react';
import './notification.css'

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Показать модальное окно',
            buttonShow: true,
            modalShow: false,
        }
    }

    showWindow = () => {
        this.setState({modalShow: true});
        this.setState({buttonShow: false})
    }

    hideBlock = (e) => {
        this.setState({buttonShow: true});
        this.setState({modalShow: false});

        if (e.target.className === 'modalWin' || e.target.className === 'modalWin_text') {
            this.showWindow()
        } else {
            this.setState({modalShow: false})
            this.setState({title: 'Показать модальное окно'})
        }
    }
    openModal = () => {
        this.setState({buttonShow: !this.state.buttonShow})
        this.setState({modalShow: true});
        this.setState({title: 'Нажмите двойным щелчком на тёмный экран для выхода'})

    }

    render() {
        return (

            <div className="app">
                <h1 >{this.state.title}</h1>

                {this.state.buttonShow &&
                <button className='button' onClick={this.openModal}>Показать</button>
                }

                {this.state.modalShow &&
                <div className='modalWrap' onDoubleClick={this.hideBlock}>
                    <div className='modalWin'>
                        <div className="modalWin_cross">
                            <span className="crossRed" onClick={this.hideBlock}>&#10006;</span>
                        </div>
                        <div className="modalWin_text">
                            {this.props.text}
                        </div>
                        <div className="buttonClose" onClick={this.hideBlock}>Да</div>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default Notification;