import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchcountries } from '../../api';

function CountryPicker({handleCountryChange}) {

  const [fetchedcountries, setfetchedcountries] = useState([]);

  useEffect(() => {
    const fetchAPI =async ()=>{
      setfetchedcountries( await fetchcountries());}
   
      fetchAPI();
     
  }, [setfetchedcountries])
  
    return (
        <div>
          <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue ="" onChange={(e)=>{ handleCountryChange(e.target.value)}}>
              <option value=''>Global</option>
              {fetchedcountries.map((country,i) => 
              <option 
              key ={i} value={country}> {country} 
              </option>)}
            </NativeSelect>
          </FormControl>
        </div>
    )
}

export default CountryPicker
