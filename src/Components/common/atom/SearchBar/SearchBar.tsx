import { useContext } from 'react'
import {image} from '../../../../config/constant/image'
import './SearchBar.css'
import { SearchBarContext } from '../../../../context/SearchBarContext'

const SearchBar = () => {
  const {searchBarData, setSearchBarData} = useContext(SearchBarContext);
  return (
    <span>
                <div className="search-box">
                    <input type="text" placeholder='Search' onKeyDown={(e: any) => {
                    if (e.key === "Enter") {
                        const data: string = e.target.value;
                        setSearchBarData(data);
                        e.target.value = '';
                        console.log(searchBarData);
                    }
                }}/>
                    <img src={image?.searchIcon} alt="" />
                </div>
    </span>
  )
}

export default SearchBar