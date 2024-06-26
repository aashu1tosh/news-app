import { createContext, useState } from "react";

export interface NewsInterface {
    title: string,
    link: string,
    creator: string,
    description: string
    pubDate: string,
    image_url: string,
    language: string,
    category: [
        string,
    ]
}

export type NewsDataState = NewsInterface[];

interface ReactChildren {
    children: React.ReactNode
}

interface NewsContextType {
    newsData: NewsDataState;
    setNewsData: React.Dispatch<React.SetStateAction<NewsDataState>>;
}

export const NewsContext = createContext<NewsContextType>({
    newsData: [],
    setNewsData: () => { }
});


export const NewsProvider: React.FC<ReactChildren> = ({ children }) => {
    const [newsData, setNewsData] = useState<NewsDataState>([]);

    return (
        <NewsContext.Provider value={{ newsData, setNewsData }}>
            {children}
        </NewsContext.Provider >

    )
}