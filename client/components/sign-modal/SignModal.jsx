import React from 'react';
import Radium from 'radium';
import style from './sign-modal-style';

class SignModal extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            display: 'none'
        }
    }    

    openModal() {
        this.setState({ display: 'block' });
    }
    
    closeModal() {
        this.setState({ display: 'none' });
    }

    render() {
        return (
            <div style={style.container}>
                <button id="myBtn" style={{...style[this.props.type], ...style.button}} onClick={() => this.openModal()}>
                    {this.props.type === 'info' ?
                        <span style={{...style.icon, position: 'relative', top: '-1px'}}>&#128712;</span>
                    : ''}
                    {this.props.type === 'success' ?
                        <span style={style.icon}>&#10003;</span>
                    : ''}
                    {this.props.type === 'warning' ?
                        <span style={{...style.icon, position: 'relative', top: '-3px'}}>&#x26A0;</span>
                    : ''}
                    {this.props.type === 'error' ?
                        <span style={{...style.icon, position: 'relative', top: '2px'}}>&#215;</span>
                    : ''}
                </button>
                <div id="myModal" style={{...style.body, display: this.state.display}}>
                    <div style={{...style.content, ...style[this.props.type]}}>
                        <span style={style.close} onClick={() => this.closeModal()}>&times;</span>
                        <h2 style={style.header}>
                            {this.props.type === 'info' ?
                                <span style={{...style.icon, position: 'relative', top: '4px'}}>&#128712;</span>
                            : ''}
                            {this.props.type === 'success' ?
                                <span style={style.icon}>&#10003;</span>
                            : ''}
                            {this.props.type === 'warning' ?
                                <span style={style.icon}>&#x26A0;</span>
                            : ''}
                            {this.props.type === 'error' ?
                                <span style={{...style.icon, position: 'relative', top: '4px'}}>&#215;</span>
                            : ''}
                            {this.props.header}
                        </h2>
                        <p style={style.text}>{this.props.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Radium(SignModal);
