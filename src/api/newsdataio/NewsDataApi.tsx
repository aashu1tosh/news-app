

import axios from "axios";
import { useContext, useEffect, useState, } from "react";
import { ClockLoader } from "react-spinners";
import { NewsContext } from "../../context/NewsContext";
import { SearchBarContext } from "../../context/SearchBarContext";
import './loading.css';



const NewsDataApi = () => {

  const { setNewsData } = useContext(NewsContext);
  const { searchBarData } = useContext(SearchBarContext);


  const [loading, setLoading] = useState<boolean>(false);


  async function fetchData() {
    setLoading(true);
    console.log("Api called")
    try {
      await axios.get(`${import.meta.env.VITE_APP_NEWS_URL}${import.meta.env.VITE_APP_NEWS_API_KEY}`)
        .then((res) => {
          // setNewsData(res.data.articles);
          // setNewsData(res.data.articles.filter((data: NewsInterface) => data.urlToImage !== null));
          setNewsData(res.data.results)
          console.log(res)

        }).catch((error) => {
          console.log("Error occurred while fetching")
          console.log(error)
        })
    } catch (error) {
      console.log("Error: ", error)
    } finally {
      setLoading(false);
    }

  }

  async function fetchSearchData() {
    setLoading(true);
    try {
      await axios.get(`${import.meta.env.VITE_APP_NEWS_URL}${import.meta.env.VITE_APP_NEWS_API_KEY}&q=${searchBarData}`)
        .then((res) => {
          setNewsData(res.data.results)
          console.log(res.data.articles);
        })
    } catch (error) {
      alert("Error occurred while fetching");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    if (searchBarData !== undefined && searchBarData !== "") {
      console.log("search wala bar called");
      console.log(searchBarData, "search bardata")
      fetchSearchData();
    }
  }, [searchBarData])

  return <>{loading ?
    <div className="loading-state"> <div className="loading-img">
      <ClockLoader
        color={'red'}
        // loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div> </div> :
    <></>}</>


}
export default NewsDataApi