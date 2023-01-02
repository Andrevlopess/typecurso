import React from 'react';
import './App.css';

function App() {

  //* the param after the function paramters is the return typeOf
  function soma(n1: number, n2: number): number {
    return n1 + n2;
  }

  //* union type  =  two types

  function exemplo(ex: string | number) {
    return ex
  }

  exemplo(100)

  // * type alias -- não pode ser alterado

  type ID = string | number

  function showId(id: ID) {
    console.log(`O id é ${id}`);

  }

  // * interface -- pode ser alterado a qlqr momento

  interface Point {
    x: number
    y: number
    z: number
  }

  function showPoint(obj: Point) {
    return obj
  }

  const pointObj: Point = {
    x: 1,
    y: 2,
    z: 3 
  }

  showPoint(pointObj)

  //* literal types -- aceita somente os valores pré determinados

  function showDirection(direction: 'left' | 'right' | 'center'){
    return direction
  }
 
  showDirection('left')
  
  // * non null assertions operator
  // valida se o valor pode ser null ou não


  return (
    <div className="App">

    </div>
  );
}

export default App;
