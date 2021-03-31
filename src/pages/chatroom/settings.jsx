//
// import React, { useState } from 'react';
import { Toggle,
     Button, Drawer } from 'rsuite';

const Settings = (props) => {
// 

    const styles = {
        settings: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '0rem 1rem'
        },
        setting: {
            height: '5rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
        }
    }
    
    return (
        <Drawer
            show={props.showSettings} 
            size={'xs'}
            placement={'right'}
            onHide={props.closeSettings}>
                <Drawer.Header>
                    <Drawer.Title>Settings</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <div style={styles.settings}>
                        <div style={styles.setting}>
                            <span>Choose Theme</span>
                            <span><Toggle size="md" /></span>
                        </div>
                        <div style={styles.setting}>
                            <span>Setting 3</span>
                            <span><Toggle size="md" /></span>
                        </div>
                    </div>
                </Drawer.Body>
                <Drawer.Footer>
                    <Button onClick={props.closeSettings} appearance="primary">Confirm</Button>
                    <Button onClick={props.closeSettings} appearance="subtle">Cancel</Button>
                </Drawer.Footer>
            </Drawer>
  
    );
}

export default Settings;