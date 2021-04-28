import React from 'react';
//import Toolbar from './Toolbar.jsx';

const ThemeContext = React.createContext('blue');

function App() {
    return (
        <ThemeContext.Provider value="red">
            <Toolbar></Toolbar>
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    return (
        <ThemeContext.Consumer>
            {(value) => <div className="sdfsdfsdafsdfsdfsdf">Theme Button: {value}</div>}
        </ThemeContext.Consumer>
    );
}

export default App;
