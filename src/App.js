import './App.css';
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import clemi from './images/clemi.jpg'
import { Grid,  Container, Divider,  Header, Image} from 'semantic-ui-react'

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

    <Grid>
    <Grid.Row/>
    </Grid>
    <Grid columns={3} >
      <Grid.Column>
      <Image as='a' href='https://www.instagram.com/clementiddies/?hl=en' src={clemi} size='medium'  />
      </Grid.Column>
      <Grid.Column>
      <Image as='a' href='https://www.instagram.com/clementiddies/?hl=en' src={clemi} size='medium'  />
      </Grid.Column>
      <Grid.Column>
      <Image as='a' href='https://www.instagram.com/clementiddies/?hl=en' src={clemi} size='medium'  />
      </Grid.Column>
    </Grid>
    <Header as='h1' textAlign='center'>
        Clementina Consens
        <Header.Subheader>
          Vulnerable, la vida verdadera, como un poema a punto de nacer, verdadero ~ Ida Vitale
        </Header.Subheader>
      </Header>  
      <Grid columns={3}>
      <Grid.Column>
      <Image as='a' href='https://www.instagram.com/clementiddies/?hl=en' src={clemi} size='medium'  />
      </Grid.Column>
      <Grid.Column>
      <Image as='a' href='https://www.instagram.com/clementiddies/?hl=en' src={clemi} size='medium'  />
      </Grid.Column>
      <Grid.Column>
      <Image as='a' href='https://www.instagram.com/clementiddies/?hl=en' src={clemi} size='medium'  />
      </Grid.Column>
      <Grid.Row>
      </Grid.Row>
    </Grid>   
  </Container>
  );
}



export default App;
