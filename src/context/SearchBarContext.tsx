import { useState, createContext } from "react";


interface ReactChildren {
    children: React.ReactNode
}
// export const SearchBarContext = useContext({
//     searchBarData: "",
//     setSearchBarData: () => {}
// })

export const SearchBarContext = createContext({
    searchBarData: "",
    setSearchBarData: () => {}
})

export const SearchBarDataProvider: React.FC<ReactChildren> = ({children}) => {
    const [searchBarData, setSearchBarData] = useState<string>("");

    return (        
        <SearchBarContext.Provider value={{searchBarData, setSearchBarData}}>
         {children}
        </SearchBarContext.Provider>
    )
}