import './App.css'
import Banner from './Components/Banner/Banner'
import LatestNews from './Components/LatestNews/LatestNews'
import MainNews from './Components/MainNews/MainNews'
import Navbar from "./Components/Navbar/Navbar"

const App = () => {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Banner />
        <MainNews />
        <LatestNews />
      </div>

    </>
  )
}

export default App