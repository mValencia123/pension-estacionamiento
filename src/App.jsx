import Login from "./pages/Login"
import { useSelector } from 'react-redux'
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Vehicles } from "./pages/Vehicles";
import { Customers } from "./pages/Customers";
import { useEffect } from "react";
import { Pays } from "./pages/Pays";
import { Check } from "./pages/Check";

function App() {
  const logged = useSelector((state) => state.parkReducer.logged);
  console.log(Boolean(logged));

  useEffect(() =>{
    console.log("montaje o render");

  },[]);

  return (
    <Routes>
      <Route path="/" element={Boolean(logged) ? <Dashboard>{<Home/>}</Dashboard> : <Login />} />
      <Route path="home" element={Boolean(logged) ? <Dashboard>{<Home/>}</Dashboard> : <Login />} />
      <Route path="vehicles" element={Boolean(logged) ? <Dashboard>{<Vehicles/>}</Dashboard> : <Login />}/>
      <Route path="customers" element={Boolean(logged) ? <Dashboard>{<Customers/>}</Dashboard> : <Login />}/>
      <Route path="pays" element={Boolean(logged) ? <Dashboard>{<Pays/>}</Dashboard> : <Login />}/>
      <Route path="check" element={Boolean(logged) ? <Dashboard>{<Check/>}</Dashboard> : <Login />}/>
      <Route path="*" element={Boolean(logged) ? <Dashboard>{<Home/>}</Dashboard> : <Login />}/>
    </Routes>
  )
}

export default App
