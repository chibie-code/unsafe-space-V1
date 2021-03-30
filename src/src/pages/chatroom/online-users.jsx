import React from 'react';
import { Sidebar, List } from 'rsuite';

const ChatArea = () => {

    const sampleUsers = ['User1', 'User2', 'User3', 'User4', 'User5', 'User6', 'User7', 'User8', 'User9', 'User10', 'User11', 'User12'];

    const styles = {
        sidebar: {
            height: '100%',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            display: 'none'
        },
        onlineUser: {
            padding: '1.5rem 1rem'
        }
    }
    return (
        <Sidebar style={styles.sidebar}>

            <List hover>
                {sampleUsers.map((item, index) => (
                <List.Item key={index} index={index} style={styles.onlineUser}>{item}</List.Item>
                ))}
            </List>

        </Sidebar>
    );
}

export default ChatArea;