import React from 'react';
import styles from './article-styles';
import PromisesDemo from '../../../promises-demo/PromisesDemo.jsx';
import RestApiDemo from '../../../rest-api-demo/RestApiDemo.jsx';
import AsyncAwaitDemo from '../../../async-await-demo/AsyncAwaitDemo.jsx';

export default class Article extends React.Component {
    constructor(props) {
        super(props); 
            
        this.state = {
            padding: '5vw'
        };
    };

    componentDidMount() {
        let mediaQueryList = window.matchMedia("(min-width: 900px)");
        mediaQueryList.addListener(this.handleScreenWidthChange);
        this.handleScreenWidthChange(mediaQueryList); 
    }

    componentWillUnmount() {
        mediaQueryList.removeListener(handleScreenWidthChange);
    }

    handleScreenWidthChange = (evt) => {
        if (evt.matches) {
            this.setState({padding: '7vw'});
        } else {
            this.setState({padding: '5vw'});
        }
    }

    render() {        
        let count = 1;
        let paragraphs = this.props.paragraphs;     
        let paragraphItems = paragraphs.map((paragraph) =>
            <div key={this.props.header + count++}>
                <p style={styles.p}>{paragraph}</p>
                {this.props.header === 'Promises' ? <PromisesDemo /> : ''}
                {this.props.header === 'REST-API' ? <RestApiDemo /> : ''}
                {this.props.header === 'Async/Await' ? <AsyncAwaitDemo /> : ''}
            </div>
        );
        return (
            <article style={{...styles.article, padding: this.state.padding}}>
                <h1 id={this.props.header} style={styles.h1}>{this.props.header}</h1>
                {paragraphItems}
            </article>
        );
    }
}