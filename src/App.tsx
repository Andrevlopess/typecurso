import { log } from 'console';
import React from 'react';
import { readBuilderProgram } from 'typescript';
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

  function showDirection(direction: 'left' | 'right' | 'center') {
    return direction
  }

  showDirection('left')

  // * non null assertions operator
  // valida se o valor pode ser null ou não

  //* type guard 

  function sum(a: string | boolean, b: string | boolean) {
    if (typeof a === 'string' && typeof b === 'string') {
      console.log(parseFloat(a) + ' ' + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
      console.log(a + b)
    } else {
      console.log('impossible to sum');

    }

  }

  // * instance of
  class User {
    name

    constructor(name: string) {
      this.name = name
    }
  }

  class SuperUser extends User {
    constructor(name: string) {
      super(name)
    }
  }

  const jhon = new User("jhon")
  const paul = new SuperUser('Paul')


  function userGreeting(user: object) {
    if (user instanceof SuperUser) {
      console.log("aqui é um super user");

    } else if (user instanceof User) {
      console.log("aqui é um normal user");

    }
  }


  // * operador in

  class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
      this.name = name

      if (breed) {
        this.breed = breed
      }
    }
  }

  const turca = new Dog('turca')
  const bob = new Dog('bob', "slk ração")


  function showDogDetails(dog: Dog) {

    if ('breed' in Dog) {
      console.log(`the dogs breed is ${dog.breed}`);
    } else {
      console.log('no breed');

    }

  }

  // showDogDetails(turca)
  // showDogDetails(bob)


  //* 
  function review(stars: number | boolean) {
    if (stars) {
      return "parabens, vc deu estrelinhas "
    } else {
      return "o usuario n deu estrelinhas"
    }
  }

  review(false)

  // * function without return "VOID"

  function logSum(a: number, b: number): void {
    console.log(a + b);

  }

  // * callback as an argument
  function greeting(name: string): string {
    return 'hi ' + name;
  }

  function preGreeting(f: (name: string) => string, userName: string) {
    const greet = f(userName)
    console.log(greet);

  }

  preGreeting(greeting, 'andre')


  // * generic functions

  function firstElement<T>(arr: T[]): T {
    return arr[0]
  }

  console.log(firstElement([1, 2, 3]));

  function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
      ...obj1,
      ...obj2,
    }
  }

  const newObject = mergeObjects({ name: "andre" }, { age: 15, lastName: "lopes" })

  // console.log(newObject);

  // * CONSTRAINTS em generic types

  function biggestNumber<T extends number | string>(a: T, b: T): T {

    let biggest: T

    if (+a > +b) {
      biggest = a
    } else {
      biggest = b
    }

    return biggest
  }

  console.log(biggestNumber("5", "99"));

  // * specifying the argument type

  function mergeArrays<T>(arr1: T[], arr2: T[]) {

    return arr1.concat(arr2)
  }

  console.log(mergeArrays([1, 2, 3], [5, 6, 7]));
  console.log(mergeArrays<number | string>([1, 2, 3], ["andre", 'vitor']));


  // * optional parameters

  function modernGreeting(name: string, greet?: string) {
    if (greet) {
      return `olá ${greet} ${name}, tudo bem?  `
    }
  }

 // * default params

   function defaultGreet(name: string = "andre" ){
      return name + 'slk'
   }

  return (

    <div className="App">

    </div>
  );
}

export default App;
