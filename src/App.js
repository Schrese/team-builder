import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js';
import Form from './components/Form';
import TeamBuilder from './components/TeamBuilder';

function App() {
  const [teamMembers, setTeamMembers] = useState(data);

  const addNewMember = member => {
    setTeamMembers([...teamMembers, member])
  }


  return (
    <div className="App">
      <h1>Team Avatar</h1>
      <Form addNewMember = {addNewMember}/>
      <TeamBuilder data = {teamMembers}/>
      
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
