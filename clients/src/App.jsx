import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "./hooks/firebase-config";
import MainPage from "./page/MainPage"; // Import MainPage component
import "./App.css";

function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // React Router hook for navigation

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const userId = result.user.uid; // Get user ID
      navigate(`/mainpage/${userId}`); // Redirect to a dynamic route
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      setMessage(error.message);
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      if (isSignUp) {
        // Sign-up functionality
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("Account created successfully! You can now log in.");
        setIsSignUp(false);
      } else {
        // Sign-in functionality
        await signInWithEmailAndPassword(auth, email, password);
        const userId = auth.currentUser.uid; // Get current user ID
        navigate(`/mainpage/${userId}`); // Redirect to dynamic route
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <img
        className="absolute inset-0 h-full w-screen object-cover z-[-1] opacity-70"
        src="/HomeBG.jpeg"
        alt="Background"
      />
      <div className="relative flex justify-center p-10">
        <div className="justify-center p-10">
          <div className="form-container">
            <p className="title">Welcome back</p>
            <form className="form" onSubmit={handleAuth}>
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="form-btn" type="submit">
                {isSignUp ? "Sign up" : "Log in"}
              </button>
            </form>
            <p className="sign-up-label">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <span
                className="sign-up-link"
                onClick={() => setIsSignUp(!isSignUp)}
                style={{ cursor: "pointer", color: "blue" }}
              >
                {isSignUp ? "Log in" : "Sign up"}
              </span>
            </p>
            {message && <p style={{ color: "red" }}>{message}</p>}
            <button
              onClick={handleGoogleSignIn}
              className="google-login-button"
            >
              Log in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
