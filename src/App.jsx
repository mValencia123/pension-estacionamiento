import Login from "./pages/Login"
import { useSelector } from 'react-redux'
import Dashboard from "./pages/Dashboard";

function App() {
  const logged = useSelector((state) => state.parkReducer.logged);
  return (
    logged ? <Dashboard/> : <Login/>  
  )
}

export default App
