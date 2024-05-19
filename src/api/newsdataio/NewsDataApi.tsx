// import { createContext, useState } from "react";

// export const NewsApiContext = createContext<any>({
    
// })

import axios from "axios";
import { useEffect, useState } from "react";

const NewsDataApi = () => {

    const [data, setData] = useState<any []>([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_NEWS_URL}${import.meta.env.VITE_APP_NEWS_API_KEY}`)
            .then((res) => {
                console.log("Data fetched");
                console.log(res.data.results);
                console.log("Storign in data");
                setData(() => res.data.results);
                console.log(data);
            }).catch((error) => {
                console.log("Error occured while fetching")
                console.log(error)
            })
    }, [])
  return (
    <div>newsdataApi</div>
  )
}

export default NewsDataApi