import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    return (
        <div>Hola mundo react!</div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

console.log('Hola mundo react!');
