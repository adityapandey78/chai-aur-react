import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState(null)
    const [id, setId]=useState('')
    const [fetchId,setFetchId]=useState('')


    useEffect(()=>{
    if(fetchId){
        fetch(`https://api.github.com/users/${fetchId}`)
        .then( response=>response.json())
        .then( data=>{
            console.log(data);
            setData(data)
        })
        .catch(error=>{
            console.error("Error Fetching data:",error);
            setData(null)
        })
        }
    },[fetchId,data,id]) //update whenever the data changes
     
    const handleFetchData=()=>{
        setFetchId(id)
     }
    
  return (

    
    <div className='text-center m-4 bg-orange-400 text-black text-3xl'>
        <p className='text-2xl'>Here Please enter your Github Username to fetch the data about your github profile</p>
    <input type="text" 
     value={id}
     onChange={(e)=> {setId(e.target.value);
                     setData(e.target.value===''?null : data); //clear the data if not present
                    }
     }
     placeholder='Enter the Github ID'
     className='m-4 p-2 bg-yellow-100'
     /> 
     <button onClick={handleFetchData} className="ml-2 p-2 bg-blue-200 text-black">Fetch</button>   
    {data && (
        <>
        Github Followers:{data.followers} 
        <img src={data.avatar_url} alt="Git Picture" width={300} />
        </>
    )}  
    </div>
  );
}

export default Github