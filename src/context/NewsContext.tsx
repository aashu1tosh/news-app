import { createContext, useState } from "react";

interface NewsInterface {
    title: string,
    link: string,
    creator: [
        string
    ],
    pubDate: string,
    image_url: string,
    language: string,
    category: [
        string,
    ]
}

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