import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '@redux/index';
//import App from '@app/shouldUpdate/test/father.jsx';
import Editor from '@app/Editor/byQuill.jsx';

render(
    <Provider store={store}>
        <div style={{ width: '80%', border: '1px solid #000' }}>
            <Editor />
        </div>
    </Provider>,
    document.getElementById('root')
);
