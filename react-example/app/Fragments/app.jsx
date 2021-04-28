import React from 'react';

function Colums() {
    return (
        <>
            <td>11111</td>
            <td>11111</td>
            <td>11111</td>
        </>
    );
}

function App() {
    return (
        <table>
            <tr>{Colums()}</tr>
        </table>
    );
}

export default App;
