import './index.css';
import LoginForm from './components/LoginForm.js';
import fdmLogo from './assets/fdm_Logo.png'


function App() {
  return (
    <div className="App">
      <div className="logoSec">
        <img className="logo" src={fdmLogo} alt="Image Failed To Load" />
        <h1>Training and Scheduling</h1>
      </div>
      <LoginForm />
    </div>
  );
}

export default App;
