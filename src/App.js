import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    //Link
} from "react-router-dom";

import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Default from "./pages/Default";
import Navber from "./components/Navber";
import Home from "./pages/Home";

function App() {
  return (
      <Router>
        <main>
          <Navber/>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/recipes" exact component={Recipes} />
              <Route  path="/single-recipe/:id" component={SingleRecipe} />
              <Route component={Default} />
          </Switch>
        </main>

    </Router>
  );
}

export default App;
