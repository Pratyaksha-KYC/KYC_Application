import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/HomePage";
import LoginForm from "./Components/Pages/Login/LoginForm";
import SignupForm from "./Components/Pages/SignUp/SignupForm";
import ForgotPasswordForm from "./Components/Pages/ForgotPassword/ForgotPasswordForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/forgotPassword" element={<ForgotPasswordForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
