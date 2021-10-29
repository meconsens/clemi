import './App.css';
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import clemi from './images/clemi.jpg'
import ironself from './images/ironself.jpeg'
import clemitree from './images/clemitree.PNG'
import rnr from './images/rnr.PNG'
import bottom from './images/bottom.PNG'
import { Grid,  Container, Reveal, Divider, Embed, List, Segment, Header, Card, Image} from 'semantic-ui-react'

function App() {
  return (
    <Container>
      <style>
      {`
      html, body {
        background-color: #BCB88A !important;
      }
      p {
        align-content: center;
        background-color: #BCB88A;
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

    <Grid columns={3} >
    <Grid.Row/>
    <Grid.Column/>
    <Grid.Column>
      <Header centered as='h1' textAlign='center'>
        Clementina Consens
        <Header.Subheader centered>
          Vulnerable, la vida verdadera, como un poema a punto de nacer, verdadero ~ Ida Vitale
        </Header.Subheader>
      </Header> 
      </Grid.Column>
      <Grid.Row/>
      <Grid.Column>
      <PhotoItem imageType={clemi}
      project = {"Clementina Consens"}
      role={"Artist, Researcher, and Environmental Scientist"}
      description = {"Clementina is driven to imagine and implement radical visions. Their holistic approach to information gathering and analysis allows for an intersectional approach to equity, reform, and justice. They have a degree in Environmental Geoscience which brings an environmental awareness to their understanding of art and culture. Throughout their career, Clementina has worked with and for Indigenous-led organizations in Ontario and they are committed to decolonization through collective healing."}
      />
      <Divider/>
      <PhotoItem imageType={clemitree}
      role={"More About Clemi"}
      description={"Clementina is passionate about visiting Uruguay often, drinking mate at the beach, and listening to stories told by the fire."}
      list={["CLEMENTINA LOVES:", "Swimming", "Adventures", "Frolicking in forests","Being a bruja cowboy"]}
      link = {"https://www.instagram.com/clementiddies/?hl=en"}
      />
      </Grid.Column>
      <Grid.Column>
      <PhotoItem imageType={ironself}
        project={"IronSelf"} 
        role={"IronSelf Lead Design & Animation Lead"}
        description={"After a near death overnight hiking experience, Eman – a Queer Egyptian woman, shares her healing journey of re-exploring the magnificent outdoors. Through the power of vulnerability, compassion and community, Eman ventures to the same overnight hike 4 years later – nothing is impossible. As a BIPOC LGBTQ2S community member, she advocates for diversity, equity and inclusion through storytelling."}
        link={'https://www.gofundme.com/f/ironself-adventure-short-film-vimff?utm_campaign=p_cf+share-flow-1&utm_medium=copy_link&utm_source=customer'}/>
      <Divider/>
      <Card.Group>
      <Image rounded fluid src={bottom}/>
      </Card.Group>
      </Grid.Column>
      <Grid.Column>
      <PhotoItem
        imageType={rnr}
        project={"Rooted and Rising"}
        role={"Youth Climate Leader"}
        description={"In the fall of 2020, Clementina participated in the pilot Rooted and Rising (R+R) Certificate Program for Youth Climate Leaders, certified by the York U Faculty of Education, and administered by the Young Lives Research Lab. Over 12-sessions, Clementina, along with 21 other young people aged 13-30 passionate about climate change gathered over zoom with rotating members of the R+R 10-person teaching team. The R+R program was grounded in 7 values: gratitude, care, resilience, inspiration, joy, disruption, & uplifting transformation. The intention of R+R was to curate a caring space for young leaders to step more deeply into their unique gifts and leadership styles. Follow the link below to see the project Clementina worked on."}
        link='https://drive.google.com/file/d/17CrN4VndJHq3zvp19BbyCGRcX6y9ywQ6/view?usp=sharing'
      />
      </Grid.Column>
      <Grid.Row>
      </Grid.Row>
    </Grid>   
  </Container>
  );
}


const PhotoItem = ({imageType, role, project, header, description, link, list, ...props }) => {
  return (
    <Grid.Column>
      <Card.Group>
        <Reveal animated='move'>
        <Reveal.Content visible>
          <Image centered rounded src={imageType} fluid />
        </Reveal.Content>
        <Reveal.Content hidden>
        <Grid columns={3}>
        <Grid.Column width={2}/>
        <Grid.Column width={13}>
        <Header centered as="h1">
           {project}
        </Header> 
        {role?
          <Header centered as="h2">
           {role}
          </Header> : 
          null}
        {description ? 
          <Header.Subheader centered>
           {description}
          </Header.Subheader> : null}
          {list? 
          <List bulleted>
            <Header as="h3"> {list[0]} </Header>
            <List.Item>{list[1]}</List.Item>
            <List.Item>{list[2]}</List.Item>
            <List.Item>{list[3]}</List.Item>
            <List.Item>{list[4]}</List.Item>
          </List>
           : null}
           {link? 
          <Header content='Learn more' as='a' href={link}/>
          : null}
          </Grid.Column>
          </Grid>
        </Reveal.Content>
      </Reveal>
      </Card.Group>
    </Grid.Column>
  )
}



export default App;
export {
  PhotoItem
 }