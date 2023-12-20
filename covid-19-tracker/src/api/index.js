import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const { data } = await axios.get(changeableUrl);
        const modifiedData = {
            confirmed: data.confirmed,
            // recovered:data.recovered,
            recovered: data.confirmed,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }
        //console.log(modifiedData.recovered.value);

        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try {
        const response = await axios.get(`${url}/daily`);
        const data = response.data;

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        //console.log("MODIFIED DATA>>>>",modifiedData);
        return modifiedData;
    } catch (error) {

    }
}



export const fetchCountries = async () => {
    try {
        const response = await axios.get(`${url}/countries`);
        // console.log(response.data.countries);
        return response.data.countries.map((country) => {
            return country.name;
        });

    } catch (error) {
        console.log(error)
    }
}