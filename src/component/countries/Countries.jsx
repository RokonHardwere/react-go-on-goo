import React, { use, useState } from 'react';
import './Countries.css'
import Country from '../country/Country';
const boxStyle = {
  display: 'grid',
  gridTemplateColumns:' repeat(3, 1fr)',
  gap: '10px'
  
}
const Countries = ({propsName}) => {

    const [visitedCountries,setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([]);
    const handleVisitedFlags =(flags)=>{
        const newVisitedFlags =[...visitedFlags,flags];
        setVisitedFlags(newVisitedFlags);
        // console.log('clicked handle flags',flags);
    }
    const handleVisitedCountries = (country)=>{
        // console.log('clicked visited Countrie',country);
        const newVisitedCountry = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountry);
    }
    const countriesData= use(propsName);
    const countries=countriesData.countries;
    // console.log(countriesData);
    return (
        <div>
            <h4>Wellcome to React world:{countries.length} </h4>
            <h3>Total Visited Country:{visitedCountries.length}</h3>
            <h3>Total visited country flag:{visitedFlags.length}</h3>
            <div style={boxStyle}>
                {
                visitedFlags.map((flags,index)=> <div key={index}>
                <img src={flags} alt="Nothing" /> </div>)
            }
            </div>
            <ol>{
                visitedCountries.map(country=> <li key={country.ccn3.ccn3}>{country.name.common}</li>)
            }</ol>
            <div className='countries'>
                    {
            countries.map(country=> <Country key={country.ccn3.ccn3}
                 country={country}
                  handleVisitedCountries={handleVisitedCountries} 
                  handleVisitedFlags={handleVisitedFlags}></Country>)
                    }
            </div>
        </div>
    );
};

export default Countries;