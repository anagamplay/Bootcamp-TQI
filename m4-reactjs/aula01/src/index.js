import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './Button'
import ComponenteA from './ComponenteA'
import ComponenteB from './ComponenteB'

class App2 extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água',
    }
  }

  alterarCopo = () => {
    this.setState({
      copo: 'regrigerante',
    })
  }
  
  render() {
    const { clock, copo} = this.state
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}>{copo}</button>
      </div>
    )
  }
}

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
      <App2 />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);