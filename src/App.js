import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/HomePage";
import LoginForm from "./Components/Pages/Login/LoginForm";
import SignupForm from "./Components/Pages/SignUp/SignupForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
