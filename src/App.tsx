//import { Routes, Route } from 'react-router-dom';

import { useSelector } from "react-redux";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { RootState } from "./store";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
  const theme:string = useSelector((state: RootState) => state.theme.theme);

  return (
    <div id="app" className={`app-${theme}-mode`}>
      <Navbar/>
      <Home/>
      <Resume/>
      <Portfolio/>
    </div>
  )
}

export default App
