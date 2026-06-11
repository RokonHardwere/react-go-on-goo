import React, { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    const [visted,setVisited]= useState(false);
    const handleClicked2 =()=>{
        handleVisitedFlags(country?.flags?.flags?.png);
    }
    const handelClicked =()=>{
        // 1st step 
        // setVisited(true);
        // 2nd step 
        // if(visted){
        //     setVisited(false);
        // }else{
        //     setVisited(true);
        // }
        setVisited(!visted)
        handleVisitedCountries(country);
    }
    console.log(country);
    const {name,ccn3,currencies,capital,region,languages,area,continents,flags,population}=country;
    return (
        <div className={`country ${visted && 'country-visited'}` }>
            <img src={flags?.flags?.png} alt={flags.flags.alt} />
            <h2>Name:{name.common}</h2>
            <p>Population:{population.population}</p>
            <p>{area.area} {area.area>300000 ? "Big populated":"Small populated"}</p>
            <button onClick={handelClicked}>{ visted ? "visited":"Not visited"}</button>
            <button onClick={handleClicked2}>Add country Flag clicked</button>
        </div>
    );
};

export default Country;
// // {
//   "status": true,
//   "message": "successfully fetched all countries data",
//   "countries": [
//     {
//       "name": {
//         "common": "Jamaica",
//         "official": "Jamaica"
//       },
//       "ccn3": {
//         "ccn3": "388"
//       },
//       "currencies": {
//         "currencies": {
//           "JMD": {
//             "name": "Jamaican dollar",
//             "symbol": "$"
//           }
//         }
//       },
//       "capital": {
//         "capital": [
//           "Kingston"
//         ]
//       },
//       "region": {
//         "region": "Americas"
//       },
//       "languages": {
//         "languages": {
//           "eng": "English",
//           "jam": "Jamaican Patois"
//         }
//       },
//       "area": {
//         "area": 10991
//       },
//       "cca3": {
//         "cca3": "JAM"
//       },
//       "population": {
//         "population": 2961161
//       },
//       "continents": {
//         "continents": [
//           "North America"
//         ]
//       },