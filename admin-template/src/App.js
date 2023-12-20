import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from "./pages/userList/UserList";
function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          {/* <div className="others">Other pages</div> */}

          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/users">
              <UserList/>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
