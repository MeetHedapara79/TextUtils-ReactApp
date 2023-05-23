import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import Alert from './components/Alert';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [title, setTitle] = useState("TextUtils - Home")

  const webtihome = () => {
    setTitle(document.title = "TextUtils - Home")
  }
  const webtiabout = () => {
    setTitle(document.title = "TextUtils - About")
  }
  const webticontact = () => {
    setTitle(document.title = "TextUtils - Contact")
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggoleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggoleMode={toggoleMode} webtihome={webtihome} webtiabout={webtiabout} webticontact={webticontact}/>
        <Alert alert={alert} />

        
          <Routes>
            <Route exact path="/"
              element={<Textbox head="Enter Your Text Below" showAlert={showAlert} mode={mode} toggoleMode={toggoleMode} />} />
           
            <Route exact path="/about"
              element={<About mode={mode} />}/>
            
            <Route exact path="/contact"
              element={<Contact mode={mode} toggoleMode={toggoleMode} />} />
            
          </Routes>
      </Router>
    </>

  );
}

export default App;
