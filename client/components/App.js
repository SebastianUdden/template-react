import React from 'react';

export default class App extends React.Component {
    render() {
        let author = {
            name: 'Sebastian'
        };
        return(
            <div>
                <h1>{author.name}</h1>
            </div>
        );
    }
}
