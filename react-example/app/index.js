import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '@redux/index';
//import App from '@app/shouldUpdate/test/father.jsx';
import App from '@app/hooks/UseReducer.jsx';

render(
    <Provider store={store}>
        <div style={{ fontSize: '12px' }}>
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
);
