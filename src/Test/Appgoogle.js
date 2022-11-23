import "./App.css";
import { signInWithGoogle } from "./Firebase";

function Appgoogle() {
  return (
    <div>
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Appgoogle;
