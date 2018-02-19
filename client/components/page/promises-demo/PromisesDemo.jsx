import React from 'react';
import Radium from 'radium';
import styles from './promises-demo-styles';

class PromisesDemo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            asyncData: [],
            disabled: false
        };
        this.asyncMethod.bind(this);
    }    

    asyncMethod(message) {
        let _this = this;
        return new Promise(function (fulfill, reject) {
            setTimeout(() => {
                let list = _this.state.asyncData;
                list.push(message);
                _this.setState({
                    asyncData: list
                });
                fulfill();
            }, 100);
        });
    }

    findUser() {
        return this.asyncMethod('Find User');
    }

    validateUser() {
        return this.asyncMethod('Validate User');
    }

    fetchUser() {
        return this.asyncMethod('Fetch User');
    }

    allowButton() {
        return this.setState({                    
            disabled: false
        });
    }

    demoPromises(e, message) {
        e.preventDefault();
        this.setState({
            asyncData: [],
            disabled: true
        });
        this.asyncMethod('Open DB Connection')
            .then(this.findUser.bind(this))
            .then(this.validateUser.bind(this))
            .then(this.fetchUser.bind(this))
            .then(this.allowButton.bind(this));
    }

    render() {
        let dataList = this.state.asyncData.map((data) => 
            <p key={data} style={styles.displayText}>{data}</p>
        );
        return (
            <div style={styles.container}>
                <button 
                    disabled={this.state.disabled}
                    style={styles.button}
                    onClick={(e) => this.demoPromises(e, 'Promises')}>Promises</button>
                {dataList}
            </div>
        );
    }
}

export default Radium(PromisesDemo);