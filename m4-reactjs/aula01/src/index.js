import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './Button'
import ComponenteA from './ComponenteA'
import ComponenteB from './ComponenteB'

function soma(a, b) {
  alert(a + b)
}

function sum(a, b) {
  return a + b;
}
function primeiroJSX() {
  return (
  <div className='teste'>
    <h1>Ana Clara</h1>
    <p>Introdução ao ReactJS</p>
    <h2>Soma: {sum(10,20)}</h2>
  </div>
  )
}

const App = () => {
  return (
    <div className='App'>
      {primeiroJSX()}
      <Button onClick={() => soma(10, 20)} name='Ana Clara'/>
      <ComponenteA>
        <ComponenteB>
          <Button onClick={() => soma(40, 15)} name='Botão 2'/>
        </ComponenteB>
      </ComponenteA>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);