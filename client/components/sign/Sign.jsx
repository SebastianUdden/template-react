import React from 'react';
import Radium from 'radium';
import style from './sign-style';

class Sign extends React.Component {
    constructor(props) {
        super(props);
    }    

    render() {
        return (
            <div style={{...style.container, ...style[this.props.type]}}>
                {this.props.type === 'info' ?
                    <span style={style.icon}>&#128712;</span>
                : ''}
                {this.props.type === 'success' ?
                    <span style={style.icon}>&#10003;</span>
                : ''}
                {this.props.type === 'warning' ?
                    <span style={style.icon}>&#x26A0;</span>
                : ''}
                {this.props.type === 'error' ?
                    <span style={style.icon}>&#215;</span>
                : ''}
                <span style={style.text}>{this.props.text}</span>
            </div>
        );
    }
}

export default Radium(Sign);
