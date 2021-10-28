import './App.css';
import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Button, Container, Label, Modal, Form, Segment, Header, Input, Image, Icon, Divider} from 'semantic-ui-react'

function App() {
  return (
    <Container>
      <style>
      {`
      html, body {
        background-color: #ADD8E6 !important;
      }
      p {
        align-content: center;
        background-color: #ADD8E6;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 6em;
      }
      p > span {
        opacity: 0.4;
        text-align: center;
      }
    }
    `}
    </style>

      <Header as='h1' inverted icon textAlign='center'>
        Clementina Consens
        <Header.Subheader>
          Vulnerable, la vida verdadera, como un poema a punto de nacer, verdadero ~ Ida Vitale
        </Header.Subheader>
      </Header>
    <Divider />     
    <Grid columns={3} divided>
      <Grid.Row>
      <Image src='/images/clemi.PNG' size='medium' />
      <Image src='/images/clemi.PNG' size='medium' />
      <Image src='/images/clemi.PNG' size='medium' />
      </Grid.Row>
      <Image src='/images/clemi.PNG' size='medium' />
      <Image src='/images/clemi.PNG' size='medium' />
      <Image src='/images/clemi.PNG' size='medium' />
      <Grid.Row>
      <Image src='/images/clemi.PNG' size='medium' />
      <Image src='/images/clemi.PNG' size='medium' />
      <Image src='/images/clemi.PNG' size='medium' />
      </Grid.Row>
    </Grid>
    <Divider />
  </Container>
  );
}



export default App;
