import React from 'react'
import second from '@/assets/img/i-search.svg'

function SearchInput() {
    return (
        <div className={`flex p-2 rounded-md w-full bg-[#F5F6FB] filter invert-80 sepia-12 saturate-210 hue-rotate-188 brightness-89 contrast-95`} >
            <img src={second.src} alt="search-icon" className="filter invert-80 sepia-12 saturate-210 hue-rotate-188 brightness-89 contrast-95 w-6 ml-2" />
            <input className="w-full bg-[#F5F6FB] outline-none focus:border-none focus:ring-0" placeholder='جستجو...' />
        </div >
    )
}

export default SearchInput