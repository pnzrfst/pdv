import { IoMdMenu } from "react-icons/io";
import LateralMenu from "../LateralMenu";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import './index.css'

interface HeaderAndSearch {
  module: string;
  onSearch : (query: string) => void;
}


export default function HeaderAndSearch({ module, onSearch }: HeaderAndSearch) {
  const [newSearch, setNewSearch] = useState<string>("")
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);
  return (
    <header className="header">
      <div className="burger-and-title">
        <IoMdMenu
          cursor={"pointer"}
          size={60}
          onClick={() => setMenuVisible(!isMenuVisible)}
        ></IoMdMenu>
        <h1>{module}</h1>
        {isMenuVisible ? (
          <LateralMenu onClose={() => setMenuVisible(false)}></LateralMenu>
        ) : (
          false
        )}
      </div>
      <div className="icon-and-search">
        <CiSearch size={30} color="#243E36" onClick={() => onSearch(newSearch)} cursor={"pointer"}></CiSearch>
        <input type="text" value={newSearch} onChange={(e) => setNewSearch(e.target.value)} onKeyDown={(e) => {
          if(e.key === 'Enter'){
            console.log("ENTROU")
          }
        }}/>
      </div>
    </header>
  )
}