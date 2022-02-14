import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider} from '@speechly/react-client';

import {Provider} from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="91a914b4-ddcf-40bb-9747-15344e2eb11d" language="en-US">
<Provider>
<App />
</Provider>
</SpeechProvider>,
document.getElementById('root')
);