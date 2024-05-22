import { createContext, useState } from "react";


interface ReactChildren {
    children: React.ReactNode
}
// export const SearchBarContext = useContext({
//     searchBarData: "",
//     setSearchBarData: () => {}
// })

export const SearchBarContext = createContext({
    searchBarData: "",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSearchBarData: (_data: string) => { }
})

export const SearchBarDataProvider: React.FC<ReactChildren> = ({ children }) => {
    const [searchBarData, setSearchBarData] = useState<string>("");

    return (
        <SearchBarContext.Provider value={{ searchBarData, setSearchBarData }}>
            {children}
        </SearchBarContext.Provider>
    )
}