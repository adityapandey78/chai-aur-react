import React from 'react'
import { useEffect ,useState} from 'react';

function DataAndTime() {
    const [dateTime,setDateTime]=useState()


    //date and time
    //useeffect use kra taaki memory leak na ho
    useEffect(()=>{
        const interval=setInterval(() => {
            let now= new Date();
            let formattedDate= now.toLocaleDateString();
            let formattedTime= now.toLocaleTimeString();
            setDateTime(`${formattedDate}-${formattedTime}`)
        }, 1000);
        return()=> clearInterval(interval); //ye interval clear kr dega and meomory leak ni hoga iske wejeh se
    },[])
  return (
    <h2 className="date-time" >{dateTime} </h2>
  )
}

export default DataAndTime