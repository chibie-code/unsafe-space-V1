import React from 'react';
import { Content, Input, InputGroup } from 'rsuite';

const ChatArea = ({ chatAreaRef, showUsers }) => {
    const styles = {
        chatContentBox: {
            width: '100%',
            height: '100%',
            transform: 'translate(0%, 0%)'
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

    // ref={chatAreaRef}

    return (
        <Content style={(showUsers)?styles.chatContentBox:styles.chatContentBoxHide}>
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