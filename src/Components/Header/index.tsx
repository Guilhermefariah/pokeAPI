import React from "react"
import SearchInput from "./SearchInput"
import Logo from "../../assets/pokemon.svg"

export default function Index() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-white to-cyan-500 p-4 md:p-8">
      <img
        src={Logo}
        alt="Pokemon-Logo"
        className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/12"
      />
      <SearchInput />
    </div>
  )
}
