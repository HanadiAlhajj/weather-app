import React, { useState } from 'react';
import {  AsyncPaginate } from 'react-select-async-paginate';
import  {geoOptions,GEO_API_URL} from '../api.js'
const Search = ({onhandleSearch}) => {
    const [search, setSearch] = useState(""); 
    const handleOnChange =(searchData) =>{
            setSearch(searchData);
            onhandleSearch(searchData);
    };

     const loadOptions =  (inputValue) => {
       
             const response =  fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoOptions)
             .then((response)=>response.json())
             .then((response)=>{
              return {
                options:response.data.map((city)=>{
                return{
                  value:`${city.latitude} ${city.longitude}`,
                  label: `${city.name} ${city.countryCode}`
                }
                }
                )
              }
             })
             .catch ((err) => console.log(err));
             return response;
            }
	     
    
  
   
  return (
    <AsyncPaginate
    placeholder="Search for a City"
    debounceTimeout={600}
    value={search}
    onChange={handleOnChange}
    loadOptions={loadOptions}
    />
  )
}

export default Search;
