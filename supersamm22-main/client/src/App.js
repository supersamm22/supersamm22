import './App.css';
import './login/Login.css';

import { BrowserRouter } from 'react-router-dom'

import Router from "./routes/router"
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App;
