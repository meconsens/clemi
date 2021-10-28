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
        background-color: #252839 !important;
      }
      p {
        align-content: center;
        background-color: #495285;
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

      <Header as='h2' inverted icon textAlign='center'>
        <Icon medium color="olive" name='dollar sign' />
        Price Checkout Calculator
        <Header.Subheader>
          Add some items to your cart to calculate their price.
        </Header.Subheader>
      </Header>
    <Divider />     
    <Grid columns={3} divided>
      <Grid.Row>
      </Grid.Row>

      <Grid.Row>
      </Grid.Row>
    </Grid>
    <Divider />
  </Container>
  );
}



export default App;
