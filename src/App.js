import React, { Component } from 'react'
import covidImage  from './images/covid.png';

// https://youtu.be/khJlrj3Y6Ls?t=3508

import {Cards , Charts, CountryPicker} from './components'
import styles from './App.module.css';
import { fetchData }  from "./api";
export class App extends Component {
state ={
  data:{},
  country:'',
}

  async componentDidMount ()
  {
    const fetchedData = await fetchData();
    this.setState({data :fetchedData});  }

  handleCountryChange = async (country)=> {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({data :fetchedData , country : country});
  }
  render() {
    const {data , country}=this.state;
    return ( 
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt="covid-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country ={country}/>
       
      </div>
    ) 
  }
} 

export default App
