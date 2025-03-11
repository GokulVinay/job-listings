import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import JobListing from "./components/JobListing";
import AddJob from "./components/AddJob";
import JobDetails from "./components/JobDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
        <Route path="/" element={<JobListing />} />
        </Route>
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
