import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Booking from "./component/pages/Booking";

import Footer from "./component/layout/Footer";
import Home from "./component/pages/Home";
import NavBar from "./component/layout/NavBar";
import PageNotFound from "./component/pages/PageNotFound";
import Signin from "./component/pages/Signin";
import Signup from "./component/pages/Signup";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
