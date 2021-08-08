import React, {useEffect, useState} from "react";


export default function Covid19Counter(){

    const [country, setCountry] = useState(null);
    const [data, setData] = useState(null);


        useState((country) => {
            setCountry(window.prompt("Covid-19 Cases tracker. Podaj nazwę kraju:"));
        });
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
                {data ? <p className="tracker">Liczba zakażeń Covid-19: {data.Confirmed} </p> : <p>loading...</p>}
                {data ? <p className="tracker">Na dzień: {data.Date} </p> : <p>loading...</p>}
            </div>
        </>
           )
}

