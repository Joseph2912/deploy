import "./App.css";
import { LogoutGoogle } from "./Firebase";

function AppLogoutgoogle() {
  return (
    <div className="App">
      <button class="login-with-google-btn" onClick={LogoutGoogle}>
        Logout Google
      </button>
      
    </div>
  );
}

export default AppLogoutgoogle;