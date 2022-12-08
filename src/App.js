import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from "./AllPages/Page";
import Pcare from "./AllPages/Pcare";
import Pfeedback from "./AllPages/Pfeedback";
import Pcareer from "./AllPages/Pcareer";
import Academic from "./AllPages/Academic";
import { AuthProvider } from "./AllPages/auth";
import { Login } from "./AllPages/Login";
import { RequireAuth } from "./AllPages/RequireAuth";
import Facility from "./Components/Facility/Facility";
import Awareness from "./Components/Awareness/Awareness";
import Techupdates from "./Components/Techupdates/Techupdates";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Provider } from "react-redux";
import React from "react";
import SignUp from "./AllPages/SignUp";
import { Store } from "./Redux/Store";
import Home from "./AllPages/Home";
import FeedbackMore from "./AllPages/feedbackMore";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Provider store={Store}>
          <Router>
            <Switch>
              <Route path="/SignUp">
                <SignUp />
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
              <>
                <Navbar />
                <Route exact path="/">
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                </Route>
                <Route path="/About">
                  <RequireAuth>
                    <Page />
                  </RequireAuth>
                </Route>
                <Route path="/care">
                  <RequireAuth>
                    <Pcare />
                  </RequireAuth>
                </Route>
                <Route path="/Academy">
                  <RequireAuth>
                    <Academic />
                  </RequireAuth>
                </Route>
                <Route path="/Career">
                  <RequireAuth>
                    <Pcareer />
                  </RequireAuth>
                </Route>
                <Route path="/Feedback">
                  <RequireAuth>
                    <Pfeedback />
                  </RequireAuth>
                </Route>
                <Route path="/facility">
                  <RequireAuth>
                    <Facility />
                  </RequireAuth>
                </Route>
                <Route path="/awareness">
                  <RequireAuth>
                    <Awareness />
                  </RequireAuth>
                </Route>
                <Route path="/tech">
                  <RequireAuth>
                    <Techupdates />
                  </RequireAuth>
                </Route>
                <Route path="/more/:id">
                  <RequireAuth>
                    <FeedbackMore />
                  </RequireAuth>
                </Route>
                <Footer />
              </>
            </Switch>
          </Router>
        </Provider>
      </AuthProvider>
    </div>
  );
}
export default App;
