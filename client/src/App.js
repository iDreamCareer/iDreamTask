import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./Pages/NavBar";
import ShowTheDevices from "./Pages/ShowTheDevices";
import Error from "./Pages/Error";
import Footer from "./Pages/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ShowTheDevices} />

          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
