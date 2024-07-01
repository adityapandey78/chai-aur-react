//import { useEffect,useState } from "react";

//making a custom hook and doing the API call as well

// function useCurrencyInfo(currency){
//     const [data,setData]=useState({}) //-default abhi khali hi hai 
//     useEffect(()=>{
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//         .then((res)=> res.json())//converted into json
//         .then((res)=setData(res[currency]))
//         .catch((err) => {
//             console.error("Failed to fetch currency data:", err)})
//         console.log(data);
//     },[currency]);
//     console.log(data);
//     return data;

// }

//export default useCurrencyInfo; 
//isme mere pure ke pure method ko hi return kr diya
//and baaki hooks me hi ese hi kaam krta hai eg useEffect, etc

import { useEffect, useState } from "react";

// Custom hook to fetch currency info
function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); // Default state is empty

    useEffect(() => {
        const fetchCurrencyInfo = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                const result = await response.json();
                setData(result[currency]);
            } catch (error) {
                console.error("Failed to fetch currency data:", error);
            }
        };

        fetchCurrencyInfo();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
