import React from 'react';
import { hot } from 'react-hot-loader/root';
import ReactDom from 'react-dom';

import Index from '@page/TeTd/Index.jsx';

const AppProxy = hot(() => <Index />);
ReactDom.render(<AppProxy />, document.getElementById('app'));
