import {GiphyFetch} from "@giphy/js-fetch-api";
import {createContext, useContext } from "react";

const GifContext=createContext();

const GifProvider=({Children})=>{
    const [gifs, setGifs] = useState([]);
    const [filter, setFilter] = useState("gifs");
    const [favourites, setFavourites] = useState([]);


    const gif=new GiphyFetch(import.meta.env.VITE_GIPHY_KEY); //now importing all the GIPHY data with an API Key

    return (<GifContext.Provider value={{gif,gifs,setGifs,filter,setFilter,favourites}}>
        {Children}
    </GifContext.Provider>);
};

export const GifState=()=>{
    return useContext(GifContext);
}
export default GifProvider;