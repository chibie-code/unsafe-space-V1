// import logo from './logo.svg';

import './App.css';
import { Container, Header, Content, Footer, Sidebar, Button, Icon, Input, InputGroup, Navbar, Nav, Dropdown, FlexboxGrid } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  const styles = {
    appContainer: {
      width: '100%',
    },
    mainContainer: {
      height: '100vh',
      overflow: 'hidden'
    },
    header: {
      marginBottom: 'auto',
      width: '100%',
      textAlign: 'center',
      backgroundColor: 'var(--oc-grape-2)'
    },
    userLogoutButton: {
      padding: '0 1rem'
    },
    mainContent: {
      overflowY: 'auto'
    },
    messageArea: {
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
      backgroundColor: 'var(--oc-grape-2)'
    }
  }
  return (
    <Container className="" style={styles.appContainer}>

      <Sidebar style={styles.sidebar}>
        Live Anonymous Users
      </Sidebar>

      <Container style={styles.mainContainer}>
      <Header style={styles.header}>
        <Navbar style={styles.userLogoutButton}>
          <Navbar.Header>
            LOGO
          </Navbar.Header>
          <Navbar.Body>
          <Nav pullRight>
            <Dropdown title="User">
              <Dropdown.Item eventKey="1" icon={<Icon icon="cog"/>}>Settings</Dropdown.Item>
              <Dropdown.Item eventKey="2">Logout</Dropdown.Item>
            </Dropdown>
          </Nav>
          </Navbar.Body>
        </Navbar>
      </Header>
      
      <Content class="message-area" style={styles.messageArea}>
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
