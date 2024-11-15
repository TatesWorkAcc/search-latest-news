import { useEffect, useState } from "react"

function GetNews(){
 
  
    const [query, setQuery] = useState('bitcoin')      //what the users search
    const [endPoint, setEndPoint] = useState('everything')        // Top headlines /v2/top-headlines   Everything /v2/everything   Sources /v2/top-headlines/sources
    const apiKey = 'e4c0f36fe7f446fa97faf58ddbd7318f'
    const api =  `https://newsapi.org/v2/${endPoint}?q=${query}&apiKey=${apiKey}`

    const [data, setData] = useState([])    // to hold arrays of data.

    

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
        .then((dataArray) => {
            setData(dataArray.articles)
            console.log(dataArray)
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

            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.author}</li>
                ))}
            </ul>
        </div>
    )

}

export default GetNews