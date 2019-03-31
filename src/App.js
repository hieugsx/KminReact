/*import React, { Component } from 'react';
import logo from './logo.svg';*/
import './App.css';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/
import React from 'react'

function getFullName(firstName,lastName){
  return firstName + ' ' +lastName
}

var divstyle = {
  fontSize : '40px',
  color : '#000',
};




/*const user = {
  firstName : 'Duong',
  lastName : 'Do',
  email : 'duong@targeet.io',
}
const App =() => {

  const element = <div style={divstyle}> {getFullName(user.firstName,user.lastName) } </div>
  
  const elementemail = <div> {user.email} </div>

  const welcome = <div class="App  App-header"> {element} {elementemail}</div>
  return welcome
}*/

function User(props){
  const user = props.user

  const element =(
    <div>
        <div style={{ fontSize: 22}}>
          {getFullName(user.firstName,user.lastName)}
        </div> 
        <div style={{
          color: 'grey',
          fontStyle: user.email ? 'unset' : 'italic'
        }}>
          {user.email || 'Khong co mail'}
        </div>     
    </div>
  )
    return element
}

const users = [
  {
    firstName: 'Dương',
    lastName: 'Đỗ',
    email: 'duong@targeek.io'
  },
  {
    firstName: 'Donald',
    lastName: 'Trump',
    email: 'real.donaldtrump@us.gov'
  },
  {
    firstName: 'Công Phượng',
    lastName: 'Nguyễn',
  },
  {
    firstName: 'Công Phượng',
    lastName: 'Nguyễn',
    email: 'phuong@gmail.com'
  }

]

function App(){
  const element = users.map(user => {
    return <User 
      user={user}
    />
  })
  return element
}

export default App
