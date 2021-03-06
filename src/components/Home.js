import React, {useState, useEffect} from 'react'
import './Home.css'

function Home() {
    const [name, setName] = useState("")
    const [data, setData] = useState([])
    const [selectedCountry, setSelectedCountry] = useState([])

    const countryHandler = (e) => {
        setName(e.target.value)
    }
    
    useEffect(() => {
        fetch(`https://corona.lmao.ninja/v2/countries`)
            .then(response => response.json())
            .then(setData)
        },[])
        // console.log(data);


    const selectCountryHandler = (country) =>{
            fetch(`https://corona.lmao.ninja/v2/countries/${country}`, {
            mode: 'no-cors'})
            .then(response => response.json())
            .then(setSelectedCountry)
        }
       // console.log(selectedCountry);

    return (
        <div className = "container">
            <h1>Covid Tracker</h1>
            <div>
                <h2>Select Country name</h2>

                {   
                    // data && data.map(item => (
                    //     <select
                    //     /* <option className="country-name" onChange={() => {selectCountryHandler(item.country)}}>{item.country}</option> */
                    
                    //      onClick={() => {selectCountryHandler(item.country)}}>
                    //          <option className="country-name">{item.country}</option> 
                    //     </select>
                        
                    // ) )
                }

                {   
                    data && 
                    <select onChange={(e) => {selectCountryHandler(e.target.value)}}>
                    {data.map(item => (
                        <option className="country-name" value ={item.country}>{item.country}</option>  
                    ) )}
                    </select>
                }
            
            </div>

            <div>
                {selectedCountry.country && 
                    <div className="cases-container">
                        <div>
                            <h2 className = "country">{selectedCountry.country} </h2>
                            <h3 className = "total"> Total Cases : {selectedCountry.cases} </h3>
                            <h3 className = "active"> Active Cases : {selectedCountry.active} </h3>
                            <h3 className = "recovered"> Recovered Cases : {selectedCountry.recovered} </h3>
                            <h3 className = "deaths"> Deaths : {selectedCountry.deaths} </h3>
                        </div>
                        <div>
                            <img src={selectedCountry.countryInfo.flag} />
                        </div>
                    </div>
                }  
            </div>
        </div>
    )
}

export default Home;
