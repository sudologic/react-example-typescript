import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Atoms from '../Atoms/Atoms';

export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/atoms">Atoms</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/atoms">
              <Atoms />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return (
      <div>
        <h2>Home</h2>
        <p>This is an example React app.</p>

        <p>Click the menu above to navigate around.  There is an intentional "error/<i>feature</i>" where we aren't handling state at the top level.
          You'll notice if you click into the atoms area, that you can add and remove atom components using the buttons provided, but when navigating to
          another page in the app you will lose the saved state and the page will revert to it's original position upon every visit.  This can be resolved
          by handling state at the highest level in the app.
        </p>

        <p> Best practices suggest handling state at the highest level of the application.  Also it's good to remember that when you change the state object
          you change EVERYTHING inside of it.  This means that you could potentially wipe the rest of your state if you try to only update one element.
          Here we only have one element to update so it isn't an issue.
        </p>

        <p>
          Routing is handled by the react-router-dom library.
          You can check it out here:  <a href="https://reactrouter.com/web/guides/quick-start">React Router!</a> You'll
          notice that the code in the <b>App</b> component is taken directly from that start page.
        </p>

      </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}