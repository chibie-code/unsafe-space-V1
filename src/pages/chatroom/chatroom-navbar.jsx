import {  Icon, Navbar, Nav } from 'rsuite';

const NavigationBar = ({ onlineUsers,  openSettings }) => {
    
    const styles = {
        
    }
    return (
        <Navbar style={styles.navBar}>
            <Navbar.Header>
            </Navbar.Header>
            <Navbar.Body style={styles.navBod}>
                <Nav>
                    <Nav.Item onSelect={onlineUsers} style={{padding: '0px', margin: '0px'}}>
                    <i className="fas fa-biohazard" style={{fontSize: '1.7rem'}}></i>
                    </Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Item eventKey="1" onClick={openSettings}>Logout</Nav.Item>
                    <Nav.Item eventKey="2" icon={<Icon icon="cog" />} onClick={openSettings}>Settings</Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
}

export default NavigationBar;