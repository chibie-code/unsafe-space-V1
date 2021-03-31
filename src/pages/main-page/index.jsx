import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Container, Header, Content, Button, FlexboxGrid, Alert } from 'rsuite';
import Login from './LoginModal';
import 'rsuite/dist/styles/rsuite-default.css';

//Main Page Component 
const MainPage = () => {
  // const [ closeModal, setCloseModal ] = useState(true);
  const [ showModal, setShowModal ] = useState(false);
  
  const styles = {
    mainContainer: {
      height: '100vh'
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
    content: {
      width: '100%',
      height: '100%',
      gridTemplateRows: 'repeat(auto-fill, minmax(90vh, 1fr))'
    },
    gridContainer: {
      width: '100%',
      height: '100%'
    }
  }

  const closeModal = () => {
    setShowModal(prev => false);
    return showModal;
  }
  const openModal = () => {
    setShowModal(prev => true);
    return showModal;
  }
  const signUp = () =>{
    Alert.success('Welcome to the Unsafe Space')
  }
  // const testin = () => alert("Testing...");
  return (
      <Container style={styles.mainContainer}>
        <Header style={styles.header}>
        </Header>
        <Content className="content" style={styles.content}>
          <FlexboxGrid justify="center" align="middle" style={styles.gridContainer}>
            <FlexboxGrid.Item style={styles.joinBtn}>
            <Login showModal={showModal} closeModal={closeModal} signUp={signUp} />
              <div style={{ textAlign: 'center' }}>
                <Button appearance='primary' onClick={openModal} block>Join The Unsafe Space</Button>
              </div>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
  );
};

export default MainPage;