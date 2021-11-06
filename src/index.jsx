import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './Header';


// Обернули в addEventListener чтобы эта часть кода
// срабатывала только на клиенте (для SSR)
window.addEventListener('load', () => {
  ReactDOM.render(<Header />, document.getElementById('root'));
})
