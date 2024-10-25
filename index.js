function getweather() {
    alert(`Hey`)
    let cityname = document.getElementById("temp1").value ;
    alert(cityname)
axios.get(`https://api.weatherapi.com/v1/current.json?key=82aceb6d1a0c4529a8e130124241910&q=${cityname}&aqi=yes`)
    .then(function (response) {
        console.log(response);
        let weatherapp = response.data;
        console.log(weatherapp.current.temp_c);
        document.getElementById("change").innerHTML = (`Your Temperature in Celsius is ${weatherapp.current.temp_c} C`)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}