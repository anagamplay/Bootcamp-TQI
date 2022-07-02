import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from '.Button'

function soma(a, b) {
  return a + b
}

function primeiroJSX() {
  return (
  <div className='teste'>
    <h1>Ana Clara</h1>
    <p>Introdução ao ReactJS</p>
    <h2>Soma: {soma(10,20)}</h2>
  </div>
  )
}

const App = () => {
  return (
    <div className='App'>
      {primeiroJSX()}
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);