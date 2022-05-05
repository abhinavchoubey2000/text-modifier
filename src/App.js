// import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [s, c] = useState(null)
  const a=(m)=>{
    c(m);
    setTimeout(() => {
      c(null)
    }, 1500);
  }
    const changeDark=()=>{
    if(mode=="light"){
    setmode("dark")
    document.body.style.background = "#585858";
    document.body.style.color = "white";
    a("Dark Mode Enabled.");
  }
  else{
    setmode("light")
    document.body.style.background = "white";
    document.body.style.color = "black";
    a("Light Mode Enabled.");
  }
  }
  return (
<> 

{/* Navigation Bar */}
{/* <Router> */}
<Navbar about = "About App" logoHeading = "Text Modifier" mode = {mode} func = {changeDark}/>
<Alert alert={s}/>
{/* <Switch> */}
  {/* <Route exact path="/about"> */}
    {/* <AboutUs/> */}
  {/* </Route>  */}
  {/* <Route exact path="/"> */}
    <Textbox textboxHeading = "Your text goes here..." mode = {mode} alert={a}/>
  {/* </Route> */}
{/* </Switch>  */}
{/* </Router>  */}
</>
  );
}

export default App;
