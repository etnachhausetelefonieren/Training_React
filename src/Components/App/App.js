import './App.css';
import { Container, Typography, Button, Grid, Input } from '@mui/material';
import * as React from 'react';
import BottomNavigationImpl from './BottomNavigationImpl';
import Table from './Table';
import ImageList from './ImageList';
import Accordion from './Accordion';

function App() {
  
    return (
        <div className="App">
          <header className="App-header">
            <Container>
              <header>
                <div>
                  <p>My App</p>
                </div>
              </header>
            </Container>
            <Container>
              <Table/>
            </Container>
            <Container>
              <ImageList/>
              <Accordion/>
            </Container>
            <Container>
            <header>
                <div>
                  <p>Thanks for watching!</p>
                </div>
              </header>
            </Container>
            <Container><BottomNavigationImpl/></Container>

          </header>
        
        </div>
      );
    }
    
    export default App;