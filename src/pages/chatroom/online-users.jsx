// import produce from 'immer';
import React from 'react';
import { Sidebar, List } from 'rsuite';
import { useSelector } from 'react-redux';
// import store from '../../redux';
// import { showUsers } from '../../redux/settings_/actions';

const ChatArea = () => {

    const usersBool = useSelector(state => state.showUsers);
    const online_users = useSelector(state => state.online_users);

    // const sampleUsers = ['User1', 'User2', 'User3', 'User4', 'User5', 'User6', 'User7', 'User8', 'User9', 'User10', 'User11', 'User12'];
    // const show = (showUsers) ? 'flex' : 'none';
    // const [ users, setUsers ] = useState([]);
    const show = (usersBool) ? 'flex' : 'none';

    const styles = {
        sidebar: {
            height: '100%',
            overflowY: 'auto',
            display: show,
            flexDirection: 'column',
        },
        onlineUser: {
            padding: '1.5rem 1rem'
        }
    }

    return ( 
        
        <Sidebar style = { styles.sidebar } >
            {console.log('users: ',online_users)}
            {console.log('usersBool: ',usersBool)}
            <List hover >
                { ( online_users ).map((user, index) => ( 
                <List.Item key = { user.id } index = { index } style = { styles.onlineUser } > { user.name } </ List.Item>
                // <List.Item key = { item.id } index = { index } style = { styles.onlineUser } > { item.name } </ List.Item>
                ))}
            </List>
        </Sidebar>
        
    );
}

export default ChatArea;