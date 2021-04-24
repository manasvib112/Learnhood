import "./App.css";
import UserAuthentication from "./views/UserAuthentication";
import FrontPage from "./views/Frontpage";
import {BrowserRouter,Route,Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <Switch>
        <Route path="/" component={UserAuthentication} exact/> 
        <Route path="/home" component={FrontPage} exact/>
        <Route path="/login" component={UserAuthentication} exact/> 
      </Switch>
      
    </div>
    </BrowserRouter>
   
  );
}
export default App; 