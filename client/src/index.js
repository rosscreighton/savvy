import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './stylesheets/global.scss';

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/App/index.js', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./components/App/index.js').default;
    render(<NextApp />, document.getElementById('root'));
  });
}
