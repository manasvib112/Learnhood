import './App.css'
import axios from 'axios'
import UserAuthentication from './views/UserAuthentication'
import FrontPage from './views/Frontpage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import NotesHome from './views/NotesHome'
import PapersPage from './views/PapersPage'
import PapersCataloguePrimary from './views/PapersCataloguePrimary'

axios.defaults.baseURL = 'http://localhost:1337'
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path='/' component={UserAuthentication} exact />
          <PrivateRoute path='/home' component={FrontPage} exact />
          <PrivateRoute path='/notes' component={NotesHome} exact />
          <PrivateRoute path='/papers' component={PapersPage} exact />
          <PrivateRoute
            path='/papers/:year'
            component={PapersCataloguePrimary}
            exact
          />
          <Route path='/login' component={UserAuthentication} exact />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App
