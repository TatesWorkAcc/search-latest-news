import { useEffect, useState } from "react"

function GetNews(){
    const apiKey = 'e4c0f36fe7f446fa97faf58ddbd7318f'
    const api =  `https://newsapi.org/v2/${endpoint}?q=${query}&apiKey=${apiKey}`
    const [query, setQuery] = useState('bitcoin')      //what the users search
    const [endPoint, setEndPoint] = useState('everything')        // Top headlines /v2/top-headlines   Everything /v2/everything   Sources /v2/top-headlines/sources

    useEffect(() => {
        fetch(api)
        .then ((res)=> {
            if (res.ok) {
                console.log('Success')
                return res.json()
            } else {
                console.log('Failed')
            }
        })
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.error('Error')
        })
    }, [])

    function handleSearch(){
        setQuery(query)

    }

    return(
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search a topic"></input>
            
            <button onClick={handleSearch} >Search</button>
        </div>
    )

}

export default GetNews