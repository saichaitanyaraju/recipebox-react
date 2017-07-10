import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { update, softUpdate } from './functions/functions.js';
import { recipes } from './storage/recipes.js';

update();
ReactDOM.render(<App recipes={recipes} />, document.getElementById('root'));
registerServiceWorker();
