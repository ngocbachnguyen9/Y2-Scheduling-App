import './index.css';
import LoginPage from './components/LoginPage';
import { useState } from 'react';
import Registry from "./Classes/Registry.js";

function App() {

  const[registry] = useState(new Registry());

  return (
    
    <div className="app">
      <LoginPage />
    </div>
  );
}

export default App;
