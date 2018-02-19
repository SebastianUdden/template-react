import React from 'react';
import Radium from 'radium';
import styles from './rest-api-demo-styles';

class RestApiDemo extends React.Component {
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

    getAsync() {   
        let url = 'https://gentle-reef-15485.herokuapp.com/api/movies';

        fetch(url)
        .then(res => res.json())
        .then((json) => {
            // console.log('Checkout this JSON! ', out);
            let asyncData = this.state.asyncData;
            for(let obj of json) {
                asyncData.push(obj);
            }
            this.setState({ asyncData });
        })
        .then(this.allowButton.bind(this))
        .catch(err => { throw err });
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
            .then(this.getAsync.bind(this))
            .then(this.findUser.bind(this))
            .then(this.validateUser.bind(this))
            .then(this.fetchUser.bind(this))
            .then(this.allowButton.bind(this))
    }

    demoREST(e, type) {
        e.preventDefault();
        switch(type) {
            case 'GET':
                this.setState({
                    asyncData: [],
                    disabled: true
                });
                this.getAsync();
                break;
            case 'POST':
                console.log('POST');
                break;
            case 'PUT':
                console.log('PUT');
                break;
            case 'PATCH':
                console.log('PATCH');
                break;
            case 'DELETE':
                console.log('DELETE');
                break;
            default:
                break;
        }
        
    }

    render() {        
        let dataList = this.state.asyncData.map((data) => 
            <p key={data._id ? data._id : 0} style={data._id ? styles.displayText : styles.noData}>{data.title}</p>
        );
        let buttons = [
            'GET',
            'POST',
            'PUT',
            'PATCH',
            'DELETE'
        ];
        let buttonList = buttons.map((button) => 
            <button 
                key={button + "-button"}
                disabled={this.state.disabled}
                style={styles.button}
                onClick={(e) => this.demoREST(e, button)}>{button}</button>
        );     
        return (
            <div style={styles.container}>                
                {buttonList}
                {dataList ? dataList : ''}
            </div>
        );
    }
}

export default Radium(RestApiDemo);
