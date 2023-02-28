// Chave API
const apiKey = "a9849cffa9d900207666f41725a48ecd";
// URL da countryflags api
const apiCountryURL = "https://countryflagsapi.com/png/";

// Variávei de seleção de elementos
const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElemnt = document.querySelector("#city");
const tempElemnt = document.querySelector("#temperature span");
const descElemnt = document.querySelector("#description");
const weatherElemnt = document.querySelector("#weather-icon");
const countryElemnt = document.querySelector("#country");
const umidityElemnt = document.querySelector("#umidity span");
const windElemnt = document.querySelector("#wind span");

//Funções

const getWeatherData = async(city) =>{
	const apiWeatherURL = 
}
const showWeatherData = (city) =>{
	console.log(city);
}
//Eventos

/*Evento de clique do botão de buscar a cidade*/
searchBtn.addEventListener("click", (e) =>{
	e.preventDefault();

	const city = cityInput.value;
	
	showWeatherData(city);

})