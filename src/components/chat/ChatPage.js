import React, {Component} from 'react'
import io from "socket.io-client";
import {subscribeToTimer} from "./client/api";
import './ChatPage.css'

class ChatPage extends Component {
    constructor(props) {
        super(props);


        this.state = {
            username: '',
            message: '',
            messages: [],
            timestamp: ''
        };


        subscribeToTimer((err, timestamp) => this.setState({
            timestamp
        }));

        this.socket = io('http://192.168.35.107:8000');

        this.socket.on('receivemessage', function (data) {
            addMessage(data);
        });

        const addMessage = data => {
            // console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            // console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('message', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});

        }
    }

    sendOnKeyPress = (evt) => {
        if (evt.key === 'Enter') {
            this.socket.emit('message', {
                author: this.state.username,
                message: this.state.message
            });
            this.setState({message: ''});
        }
    };

    //
    // messagefrombutton = (msg) => {
    //     msg.preventDefault();
    //
    //     this.socket.emit('message', {
    //         author: this.state.username,
    //         message: this.state.message
    //     });
    //     this.setState({message: ''});
    //     // this.setState({message: msg});
    // };

    render() {
        // let msg = this.state.messages.map(message => {
        //     return (
        //         <div>{message.message}</div>)
        // let msg = this.props.msg.map((viesti) => {
        //     return viesti;
        // });
        // console.log("final message", msg);

        return (
            <div className="viesti-loota">
                <div className="viesti-body">
                    <div className="viesti-otsake"><h2>TOTAL SCHLACK</h2></div>
                    <div><p>Time is: {this.state.timestamp}</p></div>
                    <hr/>
                    <div>
                        <table className="messages">
                            {this.state.messages.map(message => {
                                return (
                                    <tr className="msg">{message.author}: {message.message}</tr>
                                )
                            })}
                        </table>
                    </div>
                </div>
                <div className="input-kentta" onKeyPress={this.sendOnKeyPress}>
                    <input type="text" placeholder="Username" value={this.state.username}
                           onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                    <br/>
                    <input type="text" placeholder="Message" className="form-control" value={this.state.message}
                           onChange={ev => this.setState({message: ev.target.value})}/>
                    <br/>
                    <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                </div>
            </div>
        );
    }

}

export default ChatPage;