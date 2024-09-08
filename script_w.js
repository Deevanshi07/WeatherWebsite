/*********************Weather checker**********************/

const TempConverter = document.getElementById('temp-converter');
const Tempbtn = document.getElementById('temp-btn');
const weatbtn = document.getElementById('weather-btn');
const weathercontent = document.getElementById('weather-content');
let weatherbox = document.getElementById('weather-box');
var citySearch = document.querySelector('#search-city');
var search = document.querySelector('#search');
var city = document.querySelector('#cityoutput');
var details = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
 apikey = "d5b3ed98c9d32494c1cfab66af63e301"
//var cityURL = ""+citySearch;

function convertion(val){
    return parseInt(val - 273);
}

Tempbtn.addEventListener('click', function(){
    TempConverter.style.display= 'flex';
    weatbtn.style.display= 'block';
    weathercontent.style.display= 'none';
    Tempbtn.style.display= 'none';
});
weatbtn.addEventListener('click', function(){
    TempConverter.style.display= 'none';
    weatbtn.style.display= 'none';
    weathercontent.style.display= 'block';
    Tempbtn.style.display= 'block';
});

function performSearch(){
    TempConverter.style.display= 'none';
    Tempbtn.style.display= 'block';
    weathercontent.style.display= 'block';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+citySearch.value+'&appid='+apikey)
    
    .then(res => res.json())
    
    
   .then(data => {
       var nameval = data['name']
       var descri = data['weather']['0']['description']
       var temperature = data['main']['temp']
       var wndsped = data['wind']['speed']
       console.log(nameval);
       console.log(descri);
       console.log(temperature);
       console.log(wndsped);
       
       
       city.innerHTML=`Weather of <br><span>${nameval}</span>`
       temp.innerHTML= `<span>${ convertion(temperature)} °C</ span>`
       details.innerHTML = `<span>${descri}</span>`
       wind.innerHTML =`Wind Speed: <br><span>${wndsped} km/h </span>`
       
   })
   
   .catch(err => alert('You entered the wrong city'));

   
}

search.addEventListener("click", performSearch);
/***************Temperature Converter*********************/

function changeUnit() {
    const temperatureInput = document.getElementById("input-temp").value;
    const unit = document.getElementById("unit").value;
    const output11 = document.getElementById("output1-1");
    const output12 = document.getElementById("output1-2");
    const output21 = document.getElementById("output2-1");
    const output22 = document.getElementById("output2-2");


    if (unit == "celsius") {
        output12.innerHTML = `°F`;
        output22.innerHTML = `K`;
        if(temperatureInput != ""){
            const fahrenheit = (parseFloat(temperatureInput) * 9/5) + 32;
            const kelvin = parseFloat(temperatureInput) + 273.15;
            output11.innerHTML = fahrenheit;
            output21.innerHTML = kelvin;
        }
    } else if (unit == "fahrenheit") {
        output12.innerHTML = `°C`;
        output22.innerHTML = `K`;
        if(temperatureInput != ""){
            const celsius = (parseFloat(temperatureInput) - 32) * 5/9;
            const kelvin = (parseFloat(temperatureInput) - 32) * 5/9 + 273.15;
            output11.innerHTML = celsius;
            output21.innerHTML = kelvin;
        }
    } else if (unit == "kelvin") {
        output12.innerHTML = `°C`;
        output22.innerHTML = `°F`;
        if(temperatureInput !=""){
            const celsius = parseFloat(temperatureInput) - 273.15;
            const fahrenheit = (parseFloat(temperatureInput) - 273.15) * 9/5 + 32;
            output11.innerHTML = celsius;
            output21.innerHTML = fahrenheit;
        }
    }
}
