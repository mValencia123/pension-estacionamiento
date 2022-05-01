
import { Header } from '../components/Header';
import NavBar from '../components/NavBar'
import {Home} from './Home'



const Dashboard = () => {
    return (
      <>
        <div className="min-h-full">
          <NavBar />
          <Header text="Dashboard"/>
          <main>
            <Home /> 
          </main>
        </div>
      </>
    )
  }

export default Dashboard;