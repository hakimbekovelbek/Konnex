import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import { injectGlobal } from 'styled-components'
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    background: #fff;
  }

  * {
    box-sizing: border-box;
  }

  p, h1, h2, h3 {
    margin: 0;
    padding: 0;
  }

  ul, li {
    padding: 0;
  }

`





ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
