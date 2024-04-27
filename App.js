import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import FetchRegistration from "./components/FetchRegistration";
import Success from "./components/Success";
import RealTimeVoting from "./components/RealTimeVoting";
import Logout from "./components/logout";
import Thanks from "./components/Thanks";
import Help from "./components/Help"; // Import Help component

function App() {
  return (
    <React.Fragment>
      <Header /> {/* Fixed Header tag */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/signIn" element={<SignIn />} exact />
          <Route path="/signup" element={<Signup />} exact />
          <Route path="/RealTimeVoting" element={<RealTimeVoting />} exact />
          <Route path="/logout" element={<Logout />} exact />
          <Route
            path="/Fetchregistrations"
            element={<FetchRegistration />}
            exact
          />
          <Route path="/Success" element={<Success />} exact />
          <Route path="/thanks" element={<Thanks />} exact />
          <Route path="/help" element={<Help />} exact /> {/* Route for Help component */}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
