import React, {useEffect, useState} from "react";


export default function Covid19Counter(){

   // const [counter, setCounter] = useState(0);
    const [country, setCountry] = useState('poland');
    const [data, setData] = useState();
    const ct = window.prompt("Covid-19 Cases tracker. Podaj nazwę kraju:");

       setCountry(ct)






    useEffect(() =>{

        fetch(`https://api.covid19api.com/live/country/${country}/status/confirmed`) //{ mode: 'no-cors'})
            .then(res => res.json())
            .then(data => {

                setData(data[data.length - 1])


            })

    }, []);



    console.log(data)

    return(
        <p>Liczba zakażeń Covid-19: na dzień:   </p>
           )

}

