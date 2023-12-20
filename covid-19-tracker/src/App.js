import React from 'react'
import { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api/index';
import coronaImage from './images/covid-image-removebg-preview.png'

class App extends Component{
    state = {
        data: {},
        country:'',
    }

    
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
        //console.log(this.state.data);
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        this.setState({ data: fetchedData, country: country });
        //console.log(country)
        //fetch the data
        //set the state
    }

    render() {
        const { data,country } = this.state;
        //console.log(data);
        return (
            <div className={styles.container}>
                <img src={coronaImage} className={styles.image} alt='COVID-19' />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;