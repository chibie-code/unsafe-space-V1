import { Button, FlexboxGrid, Form, FormGroup,
   ControlLabel, FormControl, HelpBlock,
     ButtonToolbar, Modal } from 'rsuite';
import { Link } from "react-router-dom";
import 'rsuite/dist/styles/rsuite-default.css';
const Login = (props) => {
  
  // alert('Props',props.showModal);
    return (
        <Modal size={'sm'} show={ props.showModal } onHide={ props.closeModal }>
              <Modal.Header>
                <Modal.Title style={{textAlign: 'center'}}>Modal Title</Modal.Title>
              </Modal.Header>
            <Modal.Body>
              <FlexboxGrid justify='center' align='middle'>
                <FlexboxGrid.Item>
                  <Form>
                    <FormGroup>
                      <ControlLabel>Username</ControlLabel>
                      <FormControl name="name" />
                      <HelpBlock>Required</HelpBlock>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Age</ControlLabel>
                      <FormControl name="age" type="number" />
                      <HelpBlock tooltip>Required</HelpBlock>
                    </FormGroup>
                    <FormGroup>
                      <ButtonToolbar>
                      <Link to="/chat">
                        <Button appearance="primary" onClick={ props.signUp }>Submit</Button>
                      </Link>
                        
                        <Button appearance="subtle" onClick={ props.closeModal }>Cancel</Button>
                      </ButtonToolbar>
                    </FormGroup>
                  </Form>
                </FlexboxGrid.Item>
              </FlexboxGrid>
              
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
    );
}
export default Login;