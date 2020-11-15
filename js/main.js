function getJson() {
    let c = document.querySelector('#input-city').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=hammond&appid=c941c9ca854444abd337e4baa9e01cb5`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    let high_temp = (((data.main.temp_max)-273.15) * (9/5) ) + 32 + " " + ('F')
    let low_temp = (((data.main.temp_min)-273.15) * (9/5) ) + 32 + " " + ('F')
    let forecast_temp = (data.weather[0].description)
    // let forecast = data.weather[0].description
    let display_temp = document.createElement('td')
    let display1_temp = document.createElement('td')
    let display2_temp = document.createElement('td')

    display_temp.innerHTML = high_temp
    display2_temp.innerHTML = low_temp
    display1_temp.innerHTML = forecast_temp
    document.querySelector(`#mac`).append(display_temp)
    document.querySelector(`#and`).append(display2_temp)
    document.querySelector(`#cheese`).append(display1_temp)

    })
}


  




// Im trying to test out one row before I fill the rest of my columns
// but I cant even get one row to populate data ..... :( 





