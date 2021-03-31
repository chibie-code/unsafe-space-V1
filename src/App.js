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
import MainPage from "./pages/main-page/index"; ///< index.jsx will be automatically imported 
//And render that route with the MainPage component for the root path /
import Chatroom from './pages/chatroom/index';
import NotFoundPage from "./pages/404/index";


function App({ dispatch }) {
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
