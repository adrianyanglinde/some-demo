import React, { useContext } from 'react';

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
    const ThemeContextValue = useContext(ThemeContext);
    return <div className="sdfsdfsdafsdfsdfsdf">Theme Button: {ThemeContextValue}</div>;
}

export default App;
