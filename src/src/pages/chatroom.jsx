import React, { useState } from 'react';
import { Container, Header, Toggle,
     Button, Icon, Navbar, 
     Nav, Drawer, List } from 'rsuite';
import OnlineUsers from './chatroom/online-users';
import ChatArea from './chatroom/chat-area';
import Settings from './chatroom/settings';

function Chatroom() {
    const styles = {
        appContainer: {
            width: '100%',
        },
        mainContainer: {
            height: '100vh',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column'
        },
        header: {
            marginBottom: 'auto',
            width: '100%',
            textAlign: 'center'
        },
        userLogoutButton: {
            padding: '0 1rem'
        },
        navBar: { },
        navBod: {
        },
        mainContent: {
            overflow: 'hidden',
            height: '100%'
        }
    }
    // use redux for all the states
    const [showSettings, setShowSettings] = useState(false);
    const openSettings = () => {
        setShowSettings(prev => true);
    }
    const closeSettings = () => {
        setShowSettings(prev => false);
    }
    return ( 
        <Container className="" style={styles.appContainer}>
              
            <Container style={styles.mainContainer}>
                
                <Header style={styles.header}>
                    <Navbar style={styles.navBar}>
                        <Navbar.Header>
                        </Navbar.Header>
                        <Navbar.Body style={styles.navBod}>
                            <Nav>
                                <Nav.Item style={{padding: '0px', margin: '0px'}}>
                                    <i className="fas fa-biohazard" style={{fontSize: '1.7rem'}}></i>
                                </Nav.Item>
                            </Nav>
                            <Nav pullRight>
                                <Nav.Item eventKey="1" onClick={openSettings}>Logout</Nav.Item>
                                <Nav.Item eventKey="2" icon={<Icon icon="cog" />} onClick={openSettings}>Settings</Nav.Item>
                            </Nav>
                        </Navbar.Body>
                    </Navbar>
                </Header>

                <Container style={styles.mainContent}>
                    <OnlineUsers/>
                    <ChatArea/>
                </Container>
              
            </Container>
                  
            <Settings showSettings={ showSettings } closeSettings={ closeSettings }/>
            
        </Container>
    );
}

export default Chatroom;