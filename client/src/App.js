import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import ShowDevices from "./Pages/ShowDevices";
import NoOfClicks from "./Pages/NoOfClicks";
import JourneyScores from "./Pages/JourneyScores";

import Footer from "./Pages/Footer";
import Error from "./Pages/Error";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/showdevices" component={ShowDevices} />
          <Route exact path="/noofclicks" component={NoOfClicks} />
          <Route exact path="/journeyscores" component={JourneyScores} />

          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
