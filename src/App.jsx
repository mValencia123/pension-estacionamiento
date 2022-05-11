import Login from "./pages/Login"
import { useSelector } from 'react-redux'
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Vehicles } from "./pages/Vehicles";

function App() {
  const logged = useSelector((state) => state.parkReducer.logged);
  console.log(logged);
  return (
    <Routes>
      <Route path="/" element={logged ? <Dashboard>{<Home/>}</Dashboard> : <Login />} />
      <Route path="home" element={logged ? <Dashboard>{<Home/>}</Dashboard> : <Login />} />
      <Route path="vehicles" element={logged ? <Dashboard>{<Vehicles/>}</Dashboard> : <Login />}/>
      <Route path="*" element={logged ? <Dashboard>{<Home/>}</Dashboard> : <Login />}/>
    </Routes>
  )
}

export default App
