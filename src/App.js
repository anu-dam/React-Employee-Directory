import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import Table from "./components/Table.js";
import Container from '@material-ui/core/Container';



function App() {
  return (
    <div className="App">
      <Header/>
        <Container fixed id="container">
          <Table />         
        </Container>    
    </div>
  );
}

export default App;