import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import Homepage from './Components/Homepage'
import { Menu } from './Components/Menu';

// Pages
import Projects from './Pages/Projects';
import Errors from './Pages/Errors';
import { Contact } from './Pages/Contact';


const App = () => {
  return (

    <Router>
      {/* kept outside so the button is visible in all pages */}
      <Menu />
      <Switch>
        {/* Homepage */}
        <Route path='/' exact>
          <Homepage />
        </Route>
        {/* Projects */}
        <Route path='/projects'>
          <Projects />
        </Route>
        {/* contact page */}
        <Route>
          <Contact />
        </Route>
        <Route path='*'>
          {/* asterics symbol always matches */}
          <Errors />
        </Route>
      </Switch>
    </Router>
  )


}

export default App;
