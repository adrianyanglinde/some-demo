import React from 'react';

function Dialog(props) {
    return (
        <div className="dialog">
            <h1 className="dialog-title">{props.title}</h1>
            <p className="dialog-message">{props.message}</p>
        </div>
    );
}

function WelcomeDialog() {
    return <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />;
}

export default WelcomeDialog;
