import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '@redux/index';
import App from '@app/renderProp/App.jsx';

render(
    <Provider store={store}>
        <div style={{ fontSize: '12px' }}>
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
);
