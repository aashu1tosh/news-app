

import axios from "axios";
import { useContext, useEffect, } from "react";
import { NewsContext } from "../../context/NewsContext";



const NewsDataApi = () => {

  const { setNewsData } = useContext(NewsContext);

  async function fetchData() {
    console.log("Api called")
    try {
      await axios.get(`${import.meta.env.VITE_APP_NEWS_URL}${import.meta.env.VITE_APP_NEWS_API_KEY}&country=us`)
        .then((res) => {
          console.log(res.data.results, typeof (res.data.results));
          setNewsData(res.data.results);

        }).catch((error) => {
          console.log("Error occured while fetching")
          console.log(error)
        })
    } catch (error) {
        console.log("Error: ", error)
    }

  }
  useEffect(() => {
    fetchData();
  }, [])


  return null
}



export default NewsDataApi