function getJson() {
    let city = document.querySelector('#city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c941c9ca854444abd337e4baa9e01cb5`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    let high_temp = Math.round((((data.main.temp_max)-273.15) * (9/5) )) + 32 + " " +('\u00B0') + ('F')
    let low_temp = Math.round((((data.main.temp_min)-273.15)) * (9/5) ) + 32 + " " + ('\u00B0') + ('F')
    let forecast_temp = (data.weather[0].description)
    let humidity = data.main.humidity + ('%')

    let display_temp = document.createElement('td')
    let display1_temp = document.createElement('td')
    let display2_temp = document.createElement('td')
    let display3_temp = document.createElement('td')

    display_temp.innerHTML = high_temp
    display1_temp.innerHTML = forecast_temp
    display2_temp.innerHTML = low_temp
    display3_temp.innerHTML = humidity

    document.querySelector(`#mac`).append(display_temp)
    document.querySelector(`#cheese`).append(display1_temp)
    document.querySelector(`#and`).append(display2_temp)
    document.querySelector('#withgravy').append(display3_temp)

    })
}


  




// Im trying to test out one row before I fill the rest of my columns
// but I cant even get one row to populate data ..... :( 





