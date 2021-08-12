import React, {useEffect, useState} from "react";
import CountryChoseModal from "./CountryChoseModal";


export default function Covid19Counter(){

    const [country, setCountry] = useState("pl");
    const [data, setData] = useState(null);
   // const submmit =()=> {setCountry(input.value)}


      //  useState((country) => {

      //  });
    console.log(country)
    useEffect(() =>{

        console.log(country);
         fetch(`https://api.covid19api.com/live/country/${country}/status/confirmed`) //{ mode: 'no-cors'})
            .then(res => res.json())
            .then(data => {

                console.log(data, data[data.length - 1]);
                setData(data[data.length - 1])

            })

        }, []);

    console.log(country)

    return(

        <>
            <div className="covid-container">


                {data ? <p className="tracker A">Liczba zakażeń Covid-19: {data.Confirmed} </p> : <p>loading...</p>}
                {data ? <p className="tracker B">Na dzień: {data.Date} </p> : <p>loading...</p>}
            </div>
        </>
           )
}

