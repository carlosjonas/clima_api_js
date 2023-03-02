// Chave API
const apiKey = "a9849cffa9d900207666f41725a48ecd";
// URL da countryflags api
const apiCountryURL = "https://countryflagsapi.com/png/";

// Variávei de seleção de elementos
const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

//Funções

//Buscando a api com a key
const getWeatherData = async(city) =>{

	// Adicionando a URL da api
	const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

	// Utilizando o fetch api da aplicação
	const res = await fetch(apiWeatherURL);
	const data = await res.json();

	return data;
};

// Mostrando os dados da api
const showWeatherData = async(city) =>{
	const data = await getWeatherData(city);

	cityElement.innerText = data.name;
	tempElement.innerText = parseInt(data.main.temp);
	descElement.innerText = data.weather[0].description;
	weatherElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
	countryElement.setAttribute("src", apiCountryURL + data.sys.country);
	humidityElement.innerText = `${data.main.humidity}%`;
	windElement.innerText = `${data.wind.speed}km/h`

	//Remoção da classe quando digitamos algo
	weatherContainer.classList.remove("hide");
};
//Eventos

/*Evento de clique do botão de buscar a cidade*/
searchBtn.addEventListener("click", (e) =>{
	e.preventDefault();

	const city = cityInput.value;

	showWeatherData(city);

})

//Evento em que apertamos o ENTER e também busca as coisas
cityInput.addEventListener("keyup", (e) =>{

	if (e.code === "Enter") {
		const city = e.target.value;

		showWeatherData(city);
	}
})