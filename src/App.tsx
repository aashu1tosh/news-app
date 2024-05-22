import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import FooterBanner from './Components/FooterBanner/FooterBanner'
import LatestNews from './Components/LatestNews/LatestNews'
import MainNews from './Components/MainNews/MainNews'
import Navbar from "./Components/Navbar/Navbar"
import NewsDataApi from './api/newsdataio/NewsDataApi'
import { NewsProvider } from './context/NewsContext'
import { SearchBarDataProvider } from './context/SearchBarContext'

const App = () => {
  return (
    <>

      <NewsProvider>
        <SearchBarDataProvider>
          <div className="main-container">
            <Navbar />
            <NewsDataApi />
            <Banner />
            <MainNews />
            <LatestNews />
            <FooterBanner />
            <Footer />
          </div>
        </SearchBarDataProvider>
      </NewsProvider>
    </>
  )
}

export default App