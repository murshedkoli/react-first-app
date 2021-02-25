import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

<p>first react app</p>
  <Person></Person>
  <Counter></Counter>
  <Users></Users>
      </header>

      
    </div>
  );
}

function Person(){
  return <h1>Hello Boys</h1>
}

function Counter(){
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count : {count}</h1>
    </div>
  )
}

function Users(){
const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUser(data));
  },[])
  return (
    <div>
      <h3>User : {user.length}</h3>
      <ul>
        {
    user.map(singleUser => <li>{singleUser.name}</li>)

        }
      </ul>
    </div>

)
}



export default App;
