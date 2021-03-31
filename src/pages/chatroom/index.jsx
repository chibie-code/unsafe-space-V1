import React, { useState } from 'react';
import { Container, Header } from 'rsuite';
import OnlineUsers from './online-users';
import ChatArea from './chat-area';
import Settings from './settings';
import NavigationBar from './chatroom-navbar';
import produce from 'immer';
import { showUsers } from '../../redux/settings_/actions';
import { useSelector, useDispatch } from 'react-redux';

function Chatroom() {
    
    // use redux for all the states
    const [showSettings, setShowSettings] = useState(false);
    const [toggleUsers, setToggleUsers] = useState(true);
    const dispatch = useDispatch();
    const onlineUsersBool = useSelector(state => state.showUsers);
    
    const openSettings = () => {
        setShowSettings(prev => true);
    }
    const closeSettings = () => {
        setShowSettings(prev => false);
    }
    const onlineUsers = () => {
        // alert('Toggle Slide Left');
        dispatch(showUsers);
        setToggleUsers(prev => produce(prev, draft=>{
            draft = onlineUsersBool;
            return draft;
        }));
    }
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
        navBod: { },
        mainContent: {
            overflow: 'hidden',
            height: '100%'
        }
    }
    return ( 
        <Container className="" style={styles.appContainer}>
              
            <Container style={styles.mainContainer}>
                
                <Header style={styles.header}>
                    <NavigationBar onlineUsers={onlineUsers}  openSettings={openSettings}/>
                </Header>

                <Container style={styles.mainContent}>
                    <OnlineUsers showUsers={toggleUsers}/>
                    <ChatArea />
                </Container>
              
            </Container>
                  
            <Settings showSettings={ showSettings } closeSettings={ closeSettings }/>
            
        </Container>
    );
}

export default Chatroom;
// export default connect( store => {
//     // console.log('Store.showUsers',store.settings_reducer);
//     return store;
// } )(Chatroom);