

import axios from "axios";
import { useContext, useEffect, } from "react";
import { NewsContext } from "../../context/NewsContext";
import { SearchBarContext } from "../../context/SearchBarContext";



const NewsDataApi = () => {

  const { setNewsData } = useContext(NewsContext);
  const {searchBarData} = useContext(SearchBarContext);


  async function fetchData() {
    console.log("Api called")
    try {
      await axios.get(`${import.meta.env.VITE_APP_NEWS_URL}${import.meta.env.VITE_APP_NEWS_API_KEY}&country=us`)
        .then((res) => {
          console.log(res.data.articles, typeof (res.data.articles));
          setNewsData(res.data.articles);

        }).catch((error) => {
          console.log("Error occured while fetching")
          console.log(error)
        })
    } catch (error) {
        console.log("Error: ", error)
    }

  }

  async function fetchSearchData() {
    try {
      await axios.get(`https://newsapi.org/v2/everything?q=${searchBarData}&from=2024-05-19&to=2024-05-19&sortBy=popularity&apiKey=227258dc557c446eb1ba568efbdff663`)
        .then((res) => {

          setNewsData(res.data.articles);
          console.log(res.data.articles);
        })
    } catch (error) {
      console.log("Error occured while fetching");
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    if(searchBarData !== undefined && searchBarData !== "") {
      console.log("search wala bar called");
      console.log(searchBarData, "search bardata")
      fetchSearchData();
    }
  }, [searchBarData])


  return null
}



export default NewsDataApi