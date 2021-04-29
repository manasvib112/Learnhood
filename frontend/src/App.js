import "./App.css";
import axios from "axios";
import UserAuthentication from "./views/UserAuthentication";
import FrontPage from "./views/Frontpage";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

axios.defaults.baseURL="http://localhost:1337";
function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Switch>
        <Route path="/" component={UserAuthentication} exact/> 
        <PrivateRoute path="/home" component={FrontPage} exact/>
        <Route path="/login" component={UserAuthentication} exact/> 
      </Switch>
      
    </div>
    </BrowserRouter>
   
  );
}
export default App; 