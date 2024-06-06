import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Register from "./component/Register";
import Dashboard from "./component/Dashboard";
import Welcome from "./component/Welcome";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/sign" element={<Register />} />
        <Route
          path="/Dashboard"
          element={
            <Sidebar>
              <Dashboard />
            </Sidebar>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
