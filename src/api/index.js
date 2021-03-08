import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

//请求API接口所有数据
export const fetchData = async(country) => {
    let changeUrl = url;
    if(country){
        changeUrl = `${url}/countries/${country}`
    }
    try {
        //二次解构
        const { data:{ confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeUrl);
        const modifideData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }
        return modifideData;
    } catch (error) {
        console.log(error)
    }
}

//请求API接口每日数据
export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifideData = data.map((dailyData) => (
            {
                confirmed: dailyData.confirmed,
                recovered: dailyData.recovered,
                deaths: dailyData.deaths,
                date: dailyData.reportDate,
            }
        ));
        return modifideData;
    } catch (error) {
        console.log(error)
    }
}

//请求API接口的国家数据
export const fetchCountries = async() => {
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map(country => country.name)
    } catch (error) {
        console.log(error);
    }
}