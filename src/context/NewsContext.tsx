import { createContext, useState } from "react";

interface NewsInterface {
    title: string,
    url: string,
    author: string,
    description: string
    publishedAt: string,
    urlToImage: string,
    language: string,
    category: [
        string,
    ]
}[]

// {
//     "source": {
//       "id": "reuters",
//       "name": "Reuters"
//     },
//     "author": "Reuters.com",
//     "title": "Slovak PM Fico between life and death after shooting, Hungary PM says - Reuters.com",
//     "description": null,
//     "url": "https://www.reuters.com/world/europe/slovak-pm-fico-between-life-death-after-shooting-hungary-pm-says-2024-05-17/",
//     "urlToImage": null,
//     "publishedAt": "2024-05-18T06:32:00Z",
//     "content": null
//   },

interface ReactChildren {
    children: React.ReactNode
}

export const NewsContext = createContext({
    newsData: {},
    setNewsData: () => {}
});


export const NewsProvider: React.FC<ReactChildren> = ({ children }) => {
    const [newsData, setNewsData] = useState<NewsInterface[]>([]);

    return (
        <NewsContext.Provider value={{ newsData, setNewsData }}>
            {children}
        </NewsContext.Provider >

    )
}