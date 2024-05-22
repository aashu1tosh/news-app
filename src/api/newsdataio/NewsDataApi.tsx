

import axios from "axios";
import { useContext, useEffect, } from "react";
import { NewsContext, NewsInterface } from "../../context/NewsContext";
import { SearchBarContext } from "../../context/SearchBarContext";



const NewsDataApi = () => {

  const { setNewsData } = useContext(NewsContext);
  const { searchBarData } = useContext(SearchBarContext);


  async function fetchData() {
    console.log("Api called")
    try {
      await axios.get(`${import.meta.env.VITE_APP_NEWS_URL}${import.meta.env.VITE_APP_NEWS_API_KEY}&country=us`)
        .then((res) => {
          // setNewsData(res.data.articles);
          setNewsData(res.data.articles.filter((data: NewsInterface) => data.urlToImage !== null));

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
      const date = new Date();
      date.setDate(date.getDate() - 1);
      const yesterday = date.toISOString().split('T')[0];
      await axios.get(`${import.meta.env.VITE_APP_NEWS_SEARCH_URL}${searchBarData}&from=${yesterday}&to=${yesterday}&sortBy=popularity&apiKey=${import.meta.env.VITE_APP_NEWS_API_KEY}`)
        .then((res) => {
          setNewsData(res.data.articles.filter((data: NewsInterface) => data.urlToImage !== null));
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
    if (searchBarData !== undefined && searchBarData !== "") {
      console.log("search wala bar called");
      console.log(searchBarData, "search bardata")
      fetchSearchData();
    }
  }, [searchBarData])


  return null
}



export default NewsDataApi