// import logo from './logo.svg';
import './App.css';
import { Container, Header, Content, Footer, Sidebar, Button, Icon, Input, InputGroup } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  const styles = {
    appContainer: {
      width: '100%',
      border: 'solid 1px darkred'
    },
    mainContainer: {
      height: '100vh',
      overflow: 'hidden'
    },
    header: {
      border: 'solid 1px lime',
      marginBottom: 'auto',
      width: '100%',
      textAlign: 'center'
    },
    mainContent: {
      overflowY: 'auto'
    },
    footer: {
      marginTop: 'auto',
      width: '100%',
      textAlign: 'center'
    },
    inputGroup: {
      
    },
    inputBox: {
      marginLeft: '0 2em',
      rounded: '0'
    },
    sidebar: {
      height: '100vh',
      border: 'solid 1px',
      display: 'none'
    }
  }
  return (
    <Container className="" style={styles.appContainer}>

      <Sidebar style={styles.sidebar}></Sidebar>

      <Container style={styles.mainContainer}>
      <Header style={styles.header}>
      <Button>Message Input Section</Button>  
        Header
      </Header>
      
      <Content style={styles.mainContent}>
        Content

        

      </Content>
      
      <Footer style={styles.footer}>

        <Container>
          <InputGroup inside size="lg" placeholder="Message" style={styles.inputGroup}>
            <Input style={styles.inputBox}/>
            <InputGroup.Button>
              <i class="fas fa-paper-plane"></i>
            </InputGroup.Button>
          </InputGroup>
        </Container>
        
      </Footer>

      </Container>

    </Container>
  );
}

export default App;
