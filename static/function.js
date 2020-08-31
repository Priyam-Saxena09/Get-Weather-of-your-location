const cont1 = document.querySelector(".cont1")
const img = document.querySelector(".img")
document.querySelector("button").addEventListener("click",() => {
    if(navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition((position) => {
        fetch("http://localhost:3000/get?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude).then((response) => {
            response.json().then((data) => {
                if(data.error)
                {
                    cont1.innerHTML = ""
                    cont1.innerHTML = `${data.error}`
                }
                else
                {
                cont1.style.width = "80%"
                const final = JSON.parse(data.dat)
                cont1.innerHTML = ""
                cont1.innerHTML = `<b>Climate : ${final.current.weather_descriptions}</b>
                <b>Temperature : ${final.current.temperature}°C</b>
                <b>Humidity : ${final.current.humidity}</b>
                <b>There is ${final.current.precip}% Chances of Rain</b>
                <b>Your Location : ${final.location.name},${final.location.region},${final.location.country}</b>`
                img.innerHTML = `<img src = Images/${final.current.weather_descriptions}.jpg>`
                }
            })
        })
    })
}
})


