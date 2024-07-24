import React, { createContext, useContext, useState } from "react";
import { GiphyFetch } from '@giphy/js-fetch-api';

const GifContext=createContext();

const GifProvider=({children})=>{
    const [gifs, setGifs] = useState([]);
    const [filter, setFilter] = useState("gifs");
    const [favourites, setFavourites] = useState([]);


    const gif=new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);
     //now importing all the GIPHY data with an API Key
     if (!giphyKey) {
        console.error('GIPHY API key is missing');
      }
    return (<GifContext.Provider value={{gif,gifs,setGifs,filter,setFilter,favourites}}>
        {children}
    </GifContext.Provider>);
};

export const GifState=()=>{
    return useContext(GifContext);
}
export default GifProvider;