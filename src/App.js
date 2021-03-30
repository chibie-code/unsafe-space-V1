// import logo from './logo.svg';
// import 'rsuite/dist/styles/rsuite-default.css';
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import 'open-color/open-color.css';
//Pages
import MainPage from "./src/pages"; ///< index.jsx will be automatically imported 
//And render that route with the MainPage component for the root path /
import Chatroom from './src/pages/chatroom';
import NotFoundPage from "./src/pages/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/chat" component={Chatroom} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" /> 
      </Switch>
    </Router>
    );
}

export default App;
