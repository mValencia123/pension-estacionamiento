
import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import NavBar from '../components/NavBar'
import {Home} from './Home'
import { useSelector } from 'react-redux'

const Dashboard = ({children}) => {
  const logged = useSelector((state) => state.parkReducer.logged);
  return (
    <>
      <div className="min-h-full">
        <NavBar />
        <Header text="Dashboard"/>
        <main>
          {children}
        </main>
      </div>
    </>
  )
  }

export default Dashboard;