import React, { useState } from 'react';
import { Container, Header, Content, Sidebar,
     Button, Icon, Input, InputGroup, Navbar, 
     Nav, Drawer, List } from 'rsuite';

const ChatArea = () => {
    const styles = {
        chatContentBox: {
            width: '100%',
            height: '100%'
        },
        chatAreaParentContainer: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        chatArea: {
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--oc-gray-2)'
        },
        msgInputBoxContainer: {
            width: '100%',
            padding: '1rem',
            backgroundColor: 'var(--oc-gray-1)'
        },
        inputBox: {
            marginLeft: '0 2em',
            rounded: '0',
            borderColor: 'var(--oc-green-5)'
        }
    }
    return (
        <Content class="" style={styles.chatContentBox}>
                        <div style={styles.chatAreaParentContainer}>
                            <div style={styles.chatArea}>
                                Chat area
                            </div>
                            <div style={styles.msgInputBoxContainer}>
                                <InputGroup inside size="lg" style={styles.inputGroup}>
                                    <Input style={styles.inputBox} placeholder="Message"/>
                                    <InputGroup.Button>
                                        <p style={{color: 'var(--oc-green-5)'}}>SEND <i className="fas fa-paper-plane"></i></p>
                                    </InputGroup.Button>
                                </InputGroup>
                            </div>
                            
                        </div>
                    
                    </Content>
    );
}

export default ChatArea;