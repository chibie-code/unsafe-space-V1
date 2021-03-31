import React from "react";
import { Container, Content, FlexboxGrid } from "rsuite";
//Functional Component 
const MainPage = () => {
    const styles = {
        mainContainer: {
            height: '100vh'
          },
        content: {
            width: '100%',
            height: '100%',
            gridTemplateRows: 'repeat(auto-fill, minmax(90vh, 1fr))'
          },
          message404: {
            textAlign: 'center'
        },
        gridContainer: {
            width: '100%',
            height: '100%'
          }
    }
  return (
      <Container style={styles.mainContainer}>
          <Content className="content" style={styles.content}>
          <FlexboxGrid justify="center" align="middle" style={styles.gridContainer}>
            <FlexboxGrid.Item style={styles.message404}>
                <h1>404 Page Not Found</h1>              
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
  );
};

export default MainPage;